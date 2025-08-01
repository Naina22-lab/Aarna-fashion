# Aarna Fashions E-commerce Website

A beautiful, responsive e-commerce homepage built with React, Redux, Next.js, and Tailwind CSS for traditional Indian fashion.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Redux State Management**: Complete cart functionality with Redux Toolkit
- **Dynamic Navigation**: M1, M2, M3 navigation shows different product categories
- **Interactive Hero Section**: Auto-rotating carousel with manual navigation
- **Product Management**: Add to cart functionality with quantity tracking
- **Modern UI**: Clean, minimalistic design with smooth animations
- **Indian Pricing**: All prices displayed in Indian Rupees (₹)

## Tech Stack

- **Frontend**: React 18, Next.js 14
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd aarna-fashions-ecommerce
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

\`\`\`
aarna-fashions-ecommerce/
├── app/
│   ├── layout.tsx          # Root layout with Redux provider
│   ├── page.tsx            # Homepage component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header with navigation and cart
│   ├── HeroSection.tsx     # Hero carousel section
│   ├── ProductCard.tsx     # Individual product card
│   ├── TrendingSection.tsx # Trending products section
│   ├── FeaturedSection.tsx # Featured collections section
│   ├── CTASection.tsx      # Call-to-action section
│   ├── Footer.tsx          # Footer component
│   └── ReduxProvider.tsx   # Redux store provider
├── lib/
│   ├── store.ts            # Redux store configuration
│   └── hooks.ts            # Typed Redux hooks
├── public/
│   └── logo.png            # Aarna Fashions logo
└── README.md
\`\`\`

## Key Features Explained

### Navigation (M1, M2, M3)
- **M1 (Bridal Wear)**: Premium bridal and wedding collections
- **M2 (Festive Collection)**: Traditional festive and party wear
- **M3 (Casual Wear)**: Everyday ethnic and casual outfits

### Cart Functionality
- Add products to cart with one click
- Real-time cart count in header
- Redux state management for cart persistence
- Quantity tracking and total calculation

### Responsive Design
- Mobile-first approach
- Collapsible navigation on mobile
- Responsive grid layouts
- Touch-friendly interactions

### Performance Optimizations
- Next.js Image component for optimized images
- Server-side rendering for better SEO
- Code splitting and lazy loading
- Efficient Redux state updates

## Customization

### Adding New Products
Edit the `initialProductState` in `lib/store.ts` to add new products:

\`\`\`typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 9999,
  image: '/path-to-image.jpg',
  category: 'M1' // or 'M2', 'M3'
}
\`\`\`

### Styling
- Modify Tailwind classes in components for styling changes
- Update the color scheme in `tailwind.config.js`
- Add custom CSS in `app/globals.css`

### Adding New Sections
Create new components in the `components/` directory and import them in `app/page.tsx`.

## Deployment

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for demonstration purposes. All rights reserved.

## Contact

For any questions or support, please contact:
- Email: info@aarnafashions.com
- Phone: +91 1234567890

---

**Note**: This is a demo e-commerce website. For production use, you would need to integrate with a real payment gateway, backend API, and database.
