# Inventory Management System

A modern and stylish inventory management web application with a simple architecture and intuitive operation.

## 🚀 Features

### Core Functionality
- ✅ **Add Products** - Input product name, category, quantity, and unit price to add inventory
- ✅ **Edit Products** - Update existing product information
- ✅ **Delete Products** - Remove unwanted products
- ✅ **Search Function** - Search by product name or category
- ✅ **Category Filter** - Filter products by category

### UI/UX Features
- 🎨 **Minimalist Design** - Clean and user-friendly interface
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 📱 **Responsive Design** - Mobile, tablet, and desktop compatible
- ⚡ **Real-time Statistics** - Display total items and total inventory value
- 🎯 **Intuitive Operation** - Zero user stress design

### Data Management
- 💾 **Local Storage** - Automatic data saving in browser
- 📄 **data.txt Integration** - Pipe-delimited format data management
- 📤 **Data Export** - Download data with Ctrl+E
- 📥 **Data Import** - Load data.txt format files

## 🛠️ Technical Specifications

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - CSS variables, Flexbox, Grid, animations
- **Vanilla JavaScript** - ES6+ class syntax, modular design
- **Font Awesome** - Icon library

### Architecture
- **Single Page Application (SPA)**
- **Class-based Design** - Focus on maintainability and scalability
- **Event-driven** - Reactive user interface
- **Local-first** - Offline support

### Data Format
```
ID|Product Name|Category|Quantity|Unit Price|Created Date
Example: 1|Laptop Computer|Electronics|15|899.99|2024-01-15T10:00:00.000Z
```

## 📁 File Structure

```
inventory/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── app.js          # JavaScript application
├── data.txt        # Data file (pipe-delimited)
└── README.md       # This file
```

## 🚀 Usage

### 1. Starting the Application
```bash
# Start with local server (recommended)
python -m http.server 8000
# or
npx serve .
```

Access `http://localhost:8000` in your browser

### 2. Adding Products
1. Enter required information in the "Add Product" section
2. Click the "Add" button
3. Product will appear in the inventory list

### 3. Editing Products
1. Click the "Edit" button in the inventory list
2. Modify information in the modal
3. Click "Save" to update

### 4. Deleting Products
1. Click the "Delete" button in the inventory list
2. Select "OK" in the confirmation dialog

### 5. Search & Filter
- **Search**: Enter product name or category in the search box
- **Filter**: Use the category dropdown to filter

### 6. Theme Toggle
- Click the moon/sun icon in the header to toggle theme

### 7. Data Export
- Press `Ctrl + E` to download data in data.txt format

## ⌨️ Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| `Esc` | Close modal |
| `Ctrl + E` | Export data |

## 🎨 Design System

### Color Palette
- **Primary**: #2563eb (Blue)
- **Success**: #10b981 (Green)
- **Danger**: #ef4444 (Red)
- **Warning**: #f59e0b (Orange)

### Typography
- **Font**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI')
- **Size**: 0.75rem - 1.75rem
- **Weight**: 400, 500, 600, 700

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🔧 Customization

### Changing CSS Variables
```css
:root {
    --primary-color: #your-color;
    --bg-primary: #your-background;
    /* Other variables... */
}
```

### Adding New Features
1. Add methods to the `InventoryManager` class in `app.js`
2. Update HTML and CSS as needed
3. Add event listeners to the `bindEvents()` method

## 📊 Data Format Details

### data.txt Format
```
ID|Product Name|Category|Quantity|Unit Price|Created Date
1|Laptop Computer|Electronics|15|899.99|2024-01-15T10:00:00.000Z
```

### Local Storage Format
```json
[
  {
    "id": 1,
    "name": "Laptop Computer",
    "category": "Electronics",
    "quantity": 15,
    "price": 899.99,
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  }
]
```

## 📦 Sample Data

The application comes with 17 pre-loaded English sample products across multiple categories:

### Electronics (8 items)
- Laptop Computer, Wireless Mouse, Mechanical Keyboard
- Monitor 27 inch, Webcam HD, Printer Inkjet
- USB Hub, Bluetooth Speaker

### Furniture (6 items)
- Office Chair, Standing Desk, Desk Lamp
- Bookshelf, Ergonomic Cushion, File Cabinet

### Office Supplies (2 items)
- Whiteboard, Paper Shredder

### Appliances (1 item)
- Coffee Machine

Total sample inventory value: **$15,000+** across **350+ items**

## 🐛 Troubleshooting

### Common Issues

**Q: Data is not being saved**
A: Check if browser local storage is enabled.

**Q: Styles are not applied**
A: Clear browser cache and reload the page.

**Q: Display issues on mobile**
A: Verify that the viewport meta tag is correctly set.

## 🚀 Future Enhancements

- [ ] Barcode scanning functionality
- [ ] Inventory alert system
- [ ] Cloud data synchronization
- [ ] Multi-user support
- [ ] Reporting features
- [ ] Product image support

## 📄 License

This project is released under the MIT License.

## 🤝 Contributing

Pull requests and issue reports are welcome. Please feel free to share any improvement suggestions.

---

**Developer**: Claude AI Assistant  
**Version**: 1.0.0  
**Last Updated**: January 2024
