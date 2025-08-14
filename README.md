# Computer Bundle Purchase Decision Tool

A web-based application to help you decide whether to buy a computer bundle or purchase parts separately based on price difference analysis.

## Features

- 💰 **PHP Currency Support**: All prices displayed in Philippine Peso (₱)
- 🎯 **Smart Decision Logic**: 
  - Don't buy if price difference ≥ ₱3,000
  - Buy if price difference ≤ ₱2,999
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations
- 📊 **Detailed Analysis**: Shows price breakdown, percentage difference, and recommendations
- ⚡ **Real-time Calculation**: Instant results as you input prices

## How to Use

1. Enter the **Computer Bundle Price** in PHP
2. Enter the **Per Part Bundle Price** in PHP
3. Click **"Check Purchase Decision"** to get your recommendation
4. View the detailed analysis and recommendation

## Decision Logic

The application uses the following criteria:

- **Don't Buy**: If the price difference between computer bundle and per-part bundle is ≥ ₱3,000
- **Buy**: If the price difference is ≤ ₱2,999

## Examples

### Example 1: Don't Buy
- Computer Bundle: ₱80,000
- Per Part Bundle: ₱50,000
- Difference: ₱30,000 (≥ ₱3,000)
- **Decision: Don't Buy**

### Example 2: Buy
- Computer Bundle: ₱60,000
- Per Part Bundle: ₱58,000
- Difference: ₱2,000 (≤ ₱2,999)
- **Decision: Buy**

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the **"+"** button in the top right corner and select **"New repository"**
3. Name your repository (e.g., `computer-bundle-decision`)
4. Make sure it's set to **Public**
5. Check **"Add a README file"** (optional, you can replace it with this one)
6. Click **"Create repository"**

### Step 2: Upload Your Files

1. In your new repository, click **"uploading an existing file"** or **"Add file" > "Upload files"**
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (this file)
3. Write a commit message like "Add computer bundle decision tool"
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (tab at the top)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **"Save"**

### Step 4: Access Your Live Website

1. GitHub will provide you with a URL like: `https://yourusername.github.io/computer-bundle-decision`
2. It may take a few minutes for the site to be available
3. Your application is now live and accessible to anyone!

## Alternative Deployment Method (Using Git)

If you prefer using Git commands:

```bash
# Clone your repository
git clone https://github.com/yourusername/computer-bundle-decision.git
cd computer-bundle-decision

# Copy your files to the repository folder
# Then add, commit, and push
git add .
git commit -m "Add computer bundle decision tool"
git push origin main
```

## File Structure

```
computer-bundle-decision/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and responsive design
- **JavaScript**: Interactive functionality and calculations
- **GitHub Pages**: Free web hosting

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This tool is for educational and decision-making purposes. Always consider additional factors like warranty, support, and component quality when making purchase decisions.