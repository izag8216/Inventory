// Inventory Management Application
class InventoryManager {
    constructor() {
        this.inventory = [];
        this.currentEditId = null;
        this.init();
    }

    // Initialize
    init() {
        this.loadData();
        this.bindEvents();
        this.initTheme();
        this.render();
    }

    // Load data from localStorage
    loadData() {
        try {
            const savedData = localStorage.getItem('inventoryData');
            if (savedData) {
                this.inventory = JSON.parse(savedData);
            } else {
                // Initial English dummy data
                this.inventory = [
                    {
                        id: 1,
                        name: 'Laptop Computer',
                        category: 'Electronics',
                        quantity: 15,
                        price: 899.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: 'Office Chair',
                        category: 'Furniture',
                        quantity: 25,
                        price: 249.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 3,
                        name: 'Wireless Mouse',
                        category: 'Electronics',
                        quantity: 50,
                        price: 29.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 4,
                        name: 'Standing Desk',
                        category: 'Furniture',
                        quantity: 12,
                        price: 399.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 5,
                        name: 'Mechanical Keyboard',
                        category: 'Electronics',
                        quantity: 30,
                        price: 129.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 6,
                        name: 'Monitor 27 inch',
                        category: 'Electronics',
                        quantity: 20,
                        price: 299.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 7,
                        name: 'Desk Lamp',
                        category: 'Furniture',
                        quantity: 35,
                        price: 49.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 8,
                        name: 'Webcam HD',
                        category: 'Electronics',
                        quantity: 18,
                        price: 79.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 9,
                        name: 'Bookshelf',
                        category: 'Furniture',
                        quantity: 8,
                        price: 159.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 10,
                        name: 'Printer Inkjet',
                        category: 'Electronics',
                        quantity: 10,
                        price: 199.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 11,
                        name: 'Ergonomic Cushion',
                        category: 'Furniture',
                        quantity: 40,
                        price: 34.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 12,
                        name: 'USB Hub',
                        category: 'Electronics',
                        quantity: 60,
                        price: 24.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 13,
                        name: 'File Cabinet',
                        category: 'Furniture',
                        quantity: 6,
                        price: 189.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 14,
                        name: 'Bluetooth Speaker',
                        category: 'Electronics',
                        quantity: 22,
                        price: 89.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 15,
                        name: 'Whiteboard',
                        category: 'Office Supplies',
                        quantity: 14,
                        price: 69.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 16,
                        name: 'Paper Shredder',
                        category: 'Office Supplies',
                        quantity: 5,
                        price: 149.99,
                        createdAt: new Date().toISOString()
                    },
                    {
                        id: 17,
                        name: 'Coffee Machine',
                        category: 'Appliances',
                        quantity: 3,
                        price: 299.99,
                        createdAt: new Date().toISOString()
                    }
                ];
                this.saveData();
            }
        } catch (error) {
            console.error('Failed to load data:', error);
            this.inventory = [];
        }
    }

    // Save data to localStorage and generate data.txt file data
    saveData() {
        try {
            // Save to localStorage
            localStorage.setItem('inventoryData', JSON.stringify(this.inventory));
            
            // Generate data for data.txt file
            this.generateDataFile();
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    }

    // Generate data file for data.txt
    generateDataFile() {
        const dataText = this.inventory.map(item => 
            `${item.id}|${item.name}|${item.category}|${item.quantity}|${item.price}|${item.createdAt}`
        ).join('\n');
        
        // Output data to console (in actual implementation, use appropriate backend API)
        console.log('Data for data.txt:');
        console.log(dataText);
    }

    // Bind events
    bindEvents() {
        // Form submission
        document.getElementById('addItemForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addItem();
        });

        // Edit form submission
        document.getElementById('editItemForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateItem();
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterItems();
        });

        // Category filter
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.filterItems();
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Modal related
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('cancelEdit').addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal on outside click
        document.getElementById('editModal').addEventListener('click', (e) => {
            if (e.target.id === 'editModal') {
                this.closeModal();
            }
        });
    }

    // Initialize theme
    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    // Toggle theme
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    // Update theme icon
    updateThemeIcon(theme) {
        const icon = document.querySelector('#themeToggle i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Add item
    addItem() {
        const form = document.getElementById('addItemForm');
        const formData = new FormData(form);
        
        const newItem = {
            id: Date.now(),
            name: formData.get('itemName').trim(),
            category: formData.get('itemCategory').trim(),
            quantity: parseInt(formData.get('itemQuantity')),
            price: parseFloat(formData.get('itemPrice')),
            createdAt: new Date().toISOString()
        };

        // Validation
        if (!this.validateItem(newItem)) {
            return;
        }

        this.inventory.push(newItem);
        this.saveData();
        this.render();
        form.reset();
        
        // Success message
        this.showMessage('Product added successfully', 'success');
    }

    // Edit item
    editItem(id) {
        const item = this.inventory.find(item => item.id === id);
        if (!item) return;

        this.currentEditId = id;
        
        // Set form values
        document.getElementById('editItemId').value = item.id;
        document.getElementById('editItemName').value = item.name;
        document.getElementById('editItemCategory').value = item.category;
        document.getElementById('editItemQuantity').value = item.quantity;
        document.getElementById('editItemPrice').value = item.price;
        
        // Show modal
        document.getElementById('editModal').classList.add('active');
    }

    // Update item
    updateItem() {
        const form = document.getElementById('editItemForm');
        const formData = new FormData(form);
        
        const updatedItem = {
            id: this.currentEditId,
            name: formData.get('itemName').trim(),
            category: formData.get('itemCategory').trim(),
            quantity: parseInt(formData.get('itemQuantity')),
            price: parseFloat(formData.get('itemPrice')),
            createdAt: this.inventory.find(item => item.id === this.currentEditId).createdAt,
            updatedAt: new Date().toISOString()
        };

        // Validation
        if (!this.validateItem(updatedItem)) {
            return;
        }

        const index = this.inventory.findIndex(item => item.id === this.currentEditId);
        if (index !== -1) {
            this.inventory[index] = updatedItem;
            this.saveData();
            this.render();
            this.closeModal();
            
            // Success message
            this.showMessage('Product updated successfully', 'success');
        }
    }

    // Delete item
    deleteItem(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.inventory = this.inventory.filter(item => item.id !== id);
            this.saveData();
            this.render();
            
            // Success message
            this.showMessage('Product deleted successfully', 'success');
        }
    }

    // Validation
    validateItem(item) {
        if (!item.name || item.name.length === 0) {
            this.showMessage('Please enter a product name', 'error');
            return false;
        }
        
        if (!item.category || item.category.length === 0) {
            this.showMessage('Please enter a category', 'error');
            return false;
        }
        
        if (isNaN(item.quantity) || item.quantity < 0) {
            this.showMessage('Please enter a valid quantity', 'error');
            return false;
        }
        
        if (isNaN(item.price) || item.price < 0) {
            this.showMessage('Please enter a valid price', 'error');
            return false;
        }
        
        return true;
    }

    // Filter items
    filterItems() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter').value;
        
        let filteredItems = this.inventory;
        
        // Search filter
        if (searchTerm) {
            filteredItems = filteredItems.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
            );
        }
        
        // Category filter
        if (categoryFilter) {
            filteredItems = filteredItems.filter(item =>
                item.category === categoryFilter
            );
        }
        
        this.renderTable(filteredItems);
    }

    // Close modal
    closeModal() {
        document.getElementById('editModal').classList.remove('active');
        this.currentEditId = null;
    }

    // Show message
    showMessage(message, type = 'info') {
        // Simple message display (use more sophisticated toast messages in actual implementation)
        const alertClass = type === 'error' ? 'alert' : 'log';
        console[alertClass](message);
        
        // Temporary message display
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 24px;
            background: ${type === 'error' ? '#ef4444' : '#10b981'};
            color: white;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // Render
    render() {
        this.renderTable(this.inventory);
        this.renderStats();
        this.renderCategoryFilter();
    }

    // Render table
    renderTable(items) {
        const tbody = document.getElementById('inventoryTableBody');
        const emptyState = document.getElementById('emptyState');
        const tableContainer = document.querySelector('.table-container');
        
        if (items.length === 0) {
            tableContainer.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }
        
        tableContainer.style.display = 'block';
        emptyState.style.display = 'none';
        
        tbody.innerHTML = items.map(item => `
            <tr class="fade-in">
                <td>${this.escapeHtml(item.name)}</td>
                <td>${this.escapeHtml(item.category)}</td>
                <td>${item.quantity.toLocaleString()}</td>
                <td>$${item.price.toLocaleString()}</td>
                <td>$${(item.quantity * item.price).toLocaleString()}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-secondary" onclick="app.editItem(${item.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="app.deleteItem(${item.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Render stats
    renderStats() {
        const totalItems = this.inventory.reduce((sum, item) => sum + item.quantity, 0);
        const totalValue = this.inventory.reduce((sum, item) => sum + (item.quantity * item.price), 0);
        
        document.getElementById('totalItems').textContent = totalItems.toLocaleString();
        document.getElementById('totalValue').textContent = `$${totalValue.toLocaleString()}`;
    }

    // Render category filter
    renderCategoryFilter() {
        const categories = [...new Set(this.inventory.map(item => item.category))];
        const select = document.getElementById('categoryFilter');
        
        // Preserve current selection
        const currentValue = select.value;
        
        select.innerHTML = '<option value="">All Categories</option>' +
            categories.map(category => 
                `<option value="${this.escapeHtml(category)}">${this.escapeHtml(category)}</option>`
            ).join('');
        
        // Restore selection
        select.value = currentValue;
    }

    // HTML escape
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Export data (data.txt format)
    exportData() {
        const dataText = this.inventory.map(item => 
            `${item.id}|${item.name}|${item.category}|${item.quantity}|${item.price}|${item.createdAt}`
        ).join('\n');
        
        const blob = new Blob([dataText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'inventory_data.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showMessage('Data exported successfully', 'success');
    }

    // Import data (data.txt format)
    importData(fileContent) {
        try {
            const lines = fileContent.trim().split('\n');
            const importedItems = lines.map(line => {
                const [id, name, category, quantity, price, createdAt] = line.split('|');
                return {
                    id: parseInt(id),
                    name: name,
                    category: category,
                    quantity: parseInt(quantity),
                    price: parseFloat(price),
                    createdAt: createdAt
                };
            });
            
            this.inventory = importedItems;
            this.saveData();
            this.render();
            
            this.showMessage('Data imported successfully', 'success');
        } catch (error) {
            this.showMessage('Failed to import data', 'error');
            console.error('Import error:', error);
        }
    }
}

// Application initialization
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new InventoryManager();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Esc key to close modal
        if (e.key === 'Escape') {
            app.closeModal();
        }
        
        // Ctrl+E to export
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            app.exportData();
        }
    });
});

// Global function (for HTML calls)
window.app = app;
