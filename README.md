# 📦 Inventory - Professional Stock Management System

A modern, responsive inventory management application built with vanilla HTML, CSS, and JavaScript. Features a clean, minimalist design with comprehensive stock tracking capabilities.

![Inventory App](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)

## ✨ Features

### 📊 **Core Functionality**
- **Complete CRUD Operations** - Add, view, edit, and delete inventory items
- **Real-time Search** - Instant search across item names, SKUs, categories, and descriptions
- **Advanced Filtering** - Filter by category and stock status
- **Stock Level Monitoring** - Automatic low stock and out-of-stock alerts
- **Financial Tracking** - Real-time total inventory value calculation

### 🎨 **User Experience**
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional interface with smooth animations
- **Keyboard Shortcuts** - Efficient navigation with hotkeys
- **Toast Notifications** - Real-time feedback for all user actions
- **Empty State Handling** - Intuitive guidance for new users

### 💾 **Data Management**
- **Local Storage** - Automatic data persistence in browser
- **Data Validation** - Comprehensive input validation and error handling
- **Export/Import** - JSON data export and import capabilities
- **Sample Data** - Optional demo data for testing

### 🔧 **Technical Features**
- **Vanilla JavaScript** - No external dependencies
- **ES6+ Syntax** - Modern JavaScript features
- **CSS Grid & Flexbox** - Advanced layout techniques
- **Progressive Enhancement** - Works without JavaScript for basic functionality
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/inventory.git
   cd inventory
   ```

2. **Open the application**
   - **Option A**: Open `index.html` directly in your browser
   - **Option B**: Use a local server (recommended)
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**
   - Direct: `file:///path/to/index.html`
   - Server: `http://localhost:8000`

## 📱 Usage Guide

### Adding Items
1. Click the **"Add Item"** button or use `Ctrl+N`
2. Fill in the required fields:
   - **Item Name** - Product name
   - **SKU** - Stock Keeping Unit (unique identifier)
   - **Category** - Product category
   - **Quantity** - Current stock level
   - **Unit Price** - Price per item
   - **Minimum Stock** - Low stock threshold
   - **Description** - Optional item details
3. Click **"Save Item"** to add to inventory

### Managing Inventory
- **Search**: Use the search bar to find items by name, SKU, or category
- **Filter**: Use dropdown filters for category and stock status
- **Edit**: Click the edit icon (✏️) to modify item details
- **Delete**: Click the delete icon (🗑️) to remove items
- **View Stats**: Monitor total items, low stock alerts, and total value in the header

### Keyboard Shortcuts
- `Ctrl+N` - Add new item
- `Escape` - Close modals
- `Enter` - Submit forms
- `Tab` - Navigate between form fields

## 🏗️ Project Structure

```
inventory/
├── index.html          # Main HTML structure
├── style.css           # Comprehensive styling
├── app.js              # Application logic
├── README.md           # Documentation
└── assets/             # Images and icons (optional)
```

## 🎨 Design System

### Color Palette
- **Primary**: `#2563eb` (Blue)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Danger**: `#ef4444` (Red)
- **Background**: `#f8fafc` (Light Gray)
- **Surface**: `#ffffff` (White)

### Typography
- **Font Family**: Inter, system fonts
- **Weights**: 300, 400, 500, 600, 700
- **Responsive scaling** with proper line heights

### Components
- **Buttons**: Multiple variants (primary, secondary, danger)
- **Forms**: Consistent styling with focus states
- **Modals**: Smooth animations and backdrop
- **Tables**: Responsive with hover effects
- **Status Badges**: Color-coded stock indicators

## 🔧 Customization

### Adding New Categories
Edit the category options in both `index.html` files:
```html
<option value="YourCategory">Your Category</option>
```

### Modifying Stock Thresholds
Adjust the stock status logic in `app.js`:
```javascript
getStockStatus(quantity, minStock) {
    if (quantity === 0) return 'out-of-stock';
    if (quantity <= minStock) return 'low-stock';
    return 'in-stock';
}
```

### Styling Changes
Modify CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #your-color;
    --spacing-md: 1rem;
    /* ... other variables */
}
```

## 📊 Data Format

Items are stored in the following JSON format:
```json
{
    "id": "unique-identifier",
    "name": "Product Name",
    "sku": "PROD-SKU-001",
    "category": "Electronics",
    "quantity": 50,
    "price": 29.99,
    "minStock": 10,
    "description": "Product description",
    "dateAdded": "2024-01-01T00:00:00.000Z",
    "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 60+     |
| Firefox | 55+     |
| Safari  | 12+     |
| Edge    | 79+     |

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch (main)
4. Access at `https://yourusername.github.io/inventory`

### Netlify
1. Connect GitHub repository
2. Build command: (none needed)
3. Publish directory: `/`
4. Deploy automatically on push

### Vercel
```bash
npm i -g vercel
vercel --prod
```

## 🔒 Security Considerations

- **XSS Prevention**: All user inputs are properly escaped
- **Data Validation**: Client-side validation for all forms
- **Local Storage**: Data stored locally, no server transmission
- **No External Dependencies**: Reduced attack surface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Ensure responsive design
- Update documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Inter Font** - Beautiful typography
- **Font Awesome** - Professional icons
- **CSS Grid & Flexbox** - Modern layout capabilities
- **Local Storage API** - Client-side data persistence

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/inventory/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/inventory/discussions)
- **Email**: your.email@example.com

## 🗺️ Roadmap

- [ ] **v1.1**: Barcode scanning support
- [ ] **v1.2**: Multi-location inventory
- [ ] **v1.3**: Reporting and analytics
- [ ] **v1.4**: API integration
- [ ] **v1.5**: Team collaboration features

---

<div align="center">

**Built with ❤️ for efficient inventory management**

[Demo](https://yourusername.github.io/inventory) • [Documentation](https://github.com/yourusername/inventory/wiki) • [Report Bug](https://github.com/yourusername/inventory/issues)

</div> 