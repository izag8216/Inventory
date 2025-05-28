// Inventory Management App
class InventoryApp {
    constructor() {
        this.inventory = this.loadFromStorage() || [];
        this.currentEditId = null;
        this.currentDeleteId = null;
        
        this.initializeEventListeners();
        this.renderInventory();
        this.updateStats();
        this.showEmptyState();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Add item button
        document.getElementById('addItemBtn').addEventListener('click', () => this.openAddItemModal());
        
        // Form submission
        document.getElementById('itemForm').addEventListener('submit', (e) => this.handleFormSubmit(e));
        
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => this.handleSearch(e.target.value));
        
        // Filter functionality
        document.getElementById('categoryFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('stockFilter').addEventListener('change', () => this.applyFilters());
        
        // Modal close events
        document.getElementById('itemModal').addEventListener('click', (e) => {
            if (e.target.id === 'itemModal') this.closeItemModal();
        });
        
        document.getElementById('deleteModal').addEventListener('click', (e) => {
            if (e.target.id === 'deleteModal') this.closeDeleteModal();
        });
        
        // Delete confirmation
        document.getElementById('confirmDeleteBtn').addEventListener('click', () => this.confirmDelete());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    // Handle keyboard shortcuts
    handleKeyboardShortcuts(e) {
        if (e.key === 'Escape') {
            this.closeItemModal();
            this.closeDeleteModal();
        }
        if (e.ctrlKey && e.key === 'n') {
            e.preventDefault();
            this.openAddItemModal();
        }
    }

    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Generate SKU
    generateSKU(name, category) {
        const namePrefix = name.substring(0, 3).toUpperCase();
        const categoryPrefix = category.substring(0, 2).toUpperCase();
        const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `${namePrefix}-${categoryPrefix}-${randomNum}`;
    }

    // Open add item modal
    openAddItemModal() {
        this.currentEditId = null;
        document.getElementById('modalTitle').textContent = 'Add New Item';
        document.getElementById('saveItemBtn').textContent = 'Save Item';
        this.resetForm();
        this.showModal('itemModal');
    }

    // Open edit item modal
    openEditItemModal(id) {
        const item = this.inventory.find(item => item.id === id);
        if (!item) return;

        this.currentEditId = id;
        document.getElementById('modalTitle').textContent = 'Edit Item';
        document.getElementById('saveItemBtn').textContent = 'Update Item';
        
        // Populate form with item data
        document.getElementById('itemName').value = item.name;
        document.getElementById('itemSku').value = item.sku;
        document.getElementById('itemCategory').value = item.category;
        document.getElementById('itemQuantity').value = item.quantity;
        document.getElementById('itemPrice').value = item.price;
        document.getElementById('minStock').value = item.minStock;
        document.getElementById('itemDescription').value = item.description || '';
        
        this.showModal('itemModal');
    }

    // Close item modal
    closeItemModal() {
        this.hideModal('itemModal');
        this.resetForm();
        this.currentEditId = null;
    }

    // Open delete confirmation modal
    openDeleteModal(id) {
        this.currentDeleteId = id;
        this.showModal('deleteModal');
    }

    // Close delete modal
    closeDeleteModal() {
        this.hideModal('deleteModal');
        this.currentDeleteId = null;
    }

    // Show modal
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        if (modalId === 'itemModal') {
            setTimeout(() => {
                document.getElementById('itemName').focus();
            }, 100);
        }
    }

    // Hide modal
    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Reset form
    resetForm() {
        document.getElementById('itemForm').reset();
        document.getElementById('minStock').value = 5;
    }

    // Handle form submission
    handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const itemData = {
            name: document.getElementById('itemName').value.trim(),
            sku: document.getElementById('itemSku').value.trim(),
            category: document.getElementById('itemCategory').value,
            quantity: parseInt(document.getElementById('itemQuantity').value),
            price: parseFloat(document.getElementById('itemPrice').value),
            minStock: parseInt(document.getElementById('minStock').value),
            description: document.getElementById('itemDescription').value.trim()
        };

        // Validation
        if (!this.validateItemData(itemData)) {
            return;
        }

        if (this.currentEditId) {
            this.updateItem(this.currentEditId, itemData);
        } else {
            this.addItem(itemData);
        }
    }

    // Validate item data
    validateItemData(data) {
        if (!data.name) {
            this.showToast('Please enter an item name', 'error');
            return false;
        }

        if (!data.sku) {
            this.showToast('Please enter a SKU', 'error');
            return false;
        }

        if (!data.category) {
            this.showToast('Please select a category', 'error');
            return false;
        }

        if (data.quantity < 0) {
            this.showToast('Quantity cannot be negative', 'error');
            return false;
        }

        if (data.price < 0) {
            this.showToast('Price cannot be negative', 'error');
            return false;
        }

        // Check for duplicate SKU
        const existingItem = this.inventory.find(item => 
            item.sku.toLowerCase() === data.sku.toLowerCase() && 
            item.id !== this.currentEditId
        );

        if (existingItem) {
            this.showToast('SKU already exists', 'error');
            return false;
        }

        return true;
    }

    // Add new item
    addItem(itemData) {
        const newItem = {
            id: this.generateId(),
            ...itemData,
            dateAdded: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
        };

        this.inventory.push(newItem);
        this.saveToStorage();
        this.renderInventory();
        this.updateStats();
        this.closeItemModal();
        this.showToast('Item added successfully', 'success');
    }

    // Update existing item
    updateItem(id, itemData) {
        const index = this.inventory.findIndex(item => item.id === id);
        if (index === -1) return;

        this.inventory[index] = {
            ...this.inventory[index],
            ...itemData,
            lastUpdated: new Date().toISOString()
        };

        this.saveToStorage();
        this.renderInventory();
        this.updateStats();
        this.closeItemModal();
        this.showToast('Item updated successfully', 'success');
    }

    // Confirm delete
    confirmDelete() {
        if (!this.currentDeleteId) return;

        const index = this.inventory.findIndex(item => item.id === this.currentDeleteId);
        if (index === -1) return;

        const itemName = this.inventory[index].name;
        this.inventory.splice(index, 1);
        
        this.saveToStorage();
        this.renderInventory();
        this.updateStats();
        this.closeDeleteModal();
        this.showToast(`"${itemName}" deleted successfully`, 'success');
    }

    // Get stock status
    getStockStatus(quantity, minStock) {
        if (quantity === 0) return 'out-of-stock';
        if (quantity <= minStock) return 'low-stock';
        return 'in-stock';
    }

    // Get status display text
    getStatusText(status) {
        switch (status) {
            case 'in-stock': return 'In Stock';
            case 'low-stock': return 'Low Stock';
            case 'out-of-stock': return 'Out of Stock';
            default: return 'Unknown';
        }
    }

    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }

    // Render inventory table
    renderInventory() {
        const tbody = document.getElementById('inventoryTableBody');
        const filteredInventory = this.getFilteredInventory();
        
        if (filteredInventory.length === 0) {
            tbody.innerHTML = '';
            this.showEmptyState();
            return;
        }

        this.hideEmptyState();
        
        tbody.innerHTML = filteredInventory.map(item => {
            const status = this.getStockStatus(item.quantity, item.minStock);
            const totalValue = item.quantity * item.price;
            
            return `
                <tr class="fade-in">
                    <td>
                        <div>
                            <strong>${this.escapeHtml(item.name)}</strong>
                            ${item.description ? `<br><small style="color: var(--text-secondary)">${this.escapeHtml(item.description)}</small>` : ''}
                        </div>
                    </td>
                    <td><code>${this.escapeHtml(item.sku)}</code></td>
                    <td>${this.escapeHtml(item.category)}</td>
                    <td>${item.quantity}</td>
                    <td>${this.formatCurrency(item.price)}</td>
                    <td>${this.formatCurrency(totalValue)}</td>
                    <td>
                        <span class="status-badge status-${status}">
                            <i class="fas fa-circle"></i>
                            ${this.getStatusText(status)}
                        </span>
                    </td>
                    <td>
                        <div class="action-buttons">
                            <button class="action-btn edit" onclick="app.openEditItemModal('${item.id}')" title="Edit Item">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn delete" onclick="app.openDeleteModal('${item.id}')" title="Delete Item">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Get filtered inventory
    getFilteredInventory() {
        let filtered = [...this.inventory];
        
        // Apply search filter
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.sku.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm) ||
                (item.description && item.description.toLowerCase().includes(searchTerm))
            );
        }
        
        // Apply category filter
        const categoryFilter = document.getElementById('categoryFilter').value;
        if (categoryFilter) {
            filtered = filtered.filter(item => item.category === categoryFilter);
        }
        
        // Apply stock filter
        const stockFilter = document.getElementById('stockFilter').value;
        if (stockFilter) {
            filtered = filtered.filter(item => {
                const status = this.getStockStatus(item.quantity, item.minStock);
                return status === stockFilter;
            });
        }
        
        return filtered;
    }

    // Handle search
    handleSearch(searchTerm) {
        this.renderInventory();
    }

    // Apply filters
    applyFilters() {
        this.renderInventory();
    }

    // Update statistics
    updateStats() {
        const totalItems = this.inventory.length;
        const lowStockItems = this.inventory.filter(item => 
            this.getStockStatus(item.quantity, item.minStock) === 'low-stock' ||
            this.getStockStatus(item.quantity, item.minStock) === 'out-of-stock'
        ).length;
        const totalValue = this.inventory.reduce((sum, item) => sum + (item.quantity * item.price), 0);
        
        document.getElementById('totalItems').textContent = totalItems;
        document.getElementById('lowStockCount').textContent = lowStockItems;
        document.getElementById('totalValue').textContent = this.formatCurrency(totalValue);
    }

    // Show/hide empty state
    showEmptyState() {
        const emptyState = document.getElementById('emptyState');
        const table = document.querySelector('.inventory-table');
        
        if (this.inventory.length === 0) {
            emptyState.style.display = 'block';
            table.style.display = 'none';
        }
    }

    hideEmptyState() {
        const emptyState = document.getElementById('emptyState');
        const table = document.querySelector('.inventory-table');
        
        emptyState.style.display = 'none';
        table.style.display = 'table';
    }

    // Show toast notification
    showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconMap = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle'
        };
        
        toast.innerHTML = `
            <div class="toast-content">
                <i class="toast-icon ${iconMap[type]}"></i>
                <span class="toast-message">${this.escapeHtml(message)}</span>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 250);
        }, 3000);
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Local storage methods
    saveToStorage() {
        try {
            localStorage.setItem('inventoryData', JSON.stringify(this.inventory));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
            this.showToast('Failed to save data', 'error');
        }
    }

    loadFromStorage() {
        try {
            const data = localStorage.getItem('inventoryData');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            return null;
        }
    }

    // Export data
    exportData() {
        const dataStr = JSON.stringify(this.inventory, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `inventory-export-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showToast('Data exported successfully', 'success');
    }

    // Import data
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                if (Array.isArray(importedData)) {
                    this.inventory = importedData;
                    this.saveToStorage();
                    this.renderInventory();
                    this.updateStats();
                    this.showToast('Data imported successfully', 'success');
                } else {
                    this.showToast('Invalid file format', 'error');
                }
            } catch (error) {
                this.showToast('Failed to import data', 'error');
            }
        };
        reader.readAsText(file);
    }

    // Add sample data for demo
    addSampleData() {
        const sampleItems = [
            {
                id: this.generateId(),
                name: 'Wireless Bluetooth Headphones',
                sku: 'WIR-EL-001',
                category: 'Electronics',
                quantity: 25,
                price: 79.99,
                minStock: 5,
                description: 'High-quality wireless headphones with noise cancellation',
                dateAdded: new Date().toISOString(),
                lastUpdated: new Date().toISOString()
            },
            {
                id: this.generateId(),
                name: 'Cotton T-Shirt',
                sku: 'COT-CL-002',
                category: 'Clothing',
                quantity: 3,
                price: 19.99,
                minStock: 10,
                description: '100% cotton, available in multiple colors',
                dateAdded: new Date().toISOString(),
                lastUpdated: new Date().toISOString()
            },
            {
                id: this.generateId(),
                name: 'JavaScript Programming Guide',
                sku: 'JAV-BO-003',
                category: 'Books',
                quantity: 0,
                price: 39.99,
                minStock: 5,
                description: 'Comprehensive guide to modern JavaScript development',
                dateAdded: new Date().toISOString(),
                lastUpdated: new Date().toISOString()
            }
        ];

        this.inventory = [...this.inventory, ...sampleItems];
        this.saveToStorage();
        this.renderInventory();
        this.updateStats();
        this.showToast('Sample data added', 'success');
    }
}

// Global functions for HTML onclick events
function openAddItemModal() {
    app.openAddItemModal();
}

function closeItemModal() {
    app.closeItemModal();
}

function closeDeleteModal() {
    app.closeDeleteModal();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new InventoryApp();
    
    // Add sample data if inventory is empty (for demo purposes)
    if (app.inventory.length === 0) {
        // Uncomment the line below to add sample data on first load
        // app.addSampleData();
    }
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 