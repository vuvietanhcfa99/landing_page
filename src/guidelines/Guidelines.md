# CFA99 Service Evaluation Design Guidelines

## Brand Identity
* **Primary Color**: Amber/Yellow (#f59e0b) - represents energy, optimism, and warmth
* **Brand Name**: Always display "CFA99" in uppercase with consistent spacing
* **Logo**: Circular container with "CFA" on top line and "99" below
* **Gradient**: Use yellow gradients (from-cfa99-yellow via-cfa99-yellow-light to-cfa99-yellow-dark) for headers and primary elements

## Typography
* **Base Font Size**: 14px (as defined in globals.css)
* **Font Weight**: Use medium (500) for headings, normal (400) for body text, semibold (600) for emphasis
* **Line Height**: 1.6 for body text, 1.4 for headings for better readability
* **Letter Spacing**: -0.025em for large headings to improve visual balance

## Color System
* **Background**: Use warm off-white (#fefaf5) instead of pure white for warmth and less eye strain
* **Cards**: Pure white (#ffffff) with subtle shadows for depth
* **Response Background**: Light amber tint (#fffbeb) to distinguish CFA99 responses
* **Success States**: Green (#059669) for verified badges and positive actions
* **Warning/Alert**: Red (#dc2626) for critical notifications and alerts
* **Star Ratings**: Use bright yellow (#fcd34d) for maximum visibility and appeal

## Component Standards

### Service Header
* Always include company stats (Projects, Satisfaction, Support)
* Use amber gradient background with subtle pattern overlay
* Include notification bell with red indicator dot for alerts
* Star rating should use bright yellow (#fcd34d) with drop shadow
* Use amber-100 for secondary text and amber-200 for stats labels

### Comment Cards
* **Border Radius**: Use rounded-xl (0.75rem) for modern look
* **Padding**: 20px (p-5) for comfortable spacing
* **Shadows**: Subtle shadow that increases on hover
* **Avatar**: Use yellow gradient background with white text for initials
* **Response Section**: Always use left border accent in brand yellow
* **Interaction Elements**: Include like button and reply option with yellow accent when active
* **Verified Badge**: Green dot with "Verified" text for official responses

### Review Modal
* **Star Rating**: Large interactive stars (w-8 h-8) with hover effects using bright yellow
* **Form Fields**: Use warm background tints and consistent spacing
* **Buttons**: Primary action should use brand yellow, secondary should be outlined
* **Character Limit**: Show character count for textarea fields

## Layout & Spacing
* **Mobile First**: Design for mobile screens (375px+) then enhance for larger screens
* **Padding**: Use consistent 16px (px-4) horizontal padding on mobile
* **Gaps**: Use 16px (space-y-4) between comment cards
* **Bottom Spacing**: Add pb-20 to main content to account for floating action button

## Interactive Elements
* **Hover States**: Subtle scale or shadow changes, avoid jarring transitions
* **Loading States**: Use skeleton components or subtle animations
* **Button States**: Clear visual feedback for all interaction states
* **Form Validation**: Show errors in red (#dc2626) with helpful messages
* **Active States**: Use yellow accent colors for selected/active elements

## Accessibility
* **Color Contrast**: Ensure minimum 4.5:1 ratio for text (yellow on white provides good contrast)
* **Focus States**: Visible focus indicators for all interactive elements using yellow ring
* **Alt Text**: Descriptive alt text for all images and icons
* **Semantic HTML**: Use proper heading hierarchy and ARIA labels

## Animation Guidelines
* **Duration**: Keep animations short (0.2-0.3s) for responsiveness
* **Easing**: Use ease-out for entering elements, ease-in for exiting
* **Performance**: Prefer transforms and opacity changes over layout animations
* **Subtle**: Animations should enhance UX, not distract from content

## Mobile Specific
* **Touch Targets**: Minimum 44px height for all interactive elements
* **Thumb Zones**: Place primary actions within easy thumb reach
* **Swipe Gestures**: Consider implementing pull-to-refresh and swipe actions
* **Safe Areas**: Account for notches and home indicators on modern devices

## Content Guidelines
* **Review Display**: Show exactly 3 most recent reviews on home screen
* **Time Format**: Use relative time ("2 hours ago", "1 day ago")
* **Response Format**: Always prefix with "CFA99 Team" and include verification badge
* **Character Limits**: 500 characters for review content, unlimited for responses
* **Moderation**: All reviews should appear positive/constructive (this is a demo)

## Error Handling
* **Network Errors**: Show retry options with clear messaging
* **Validation Errors**: Inline validation with specific, helpful messages
* **Empty States**: Provide clear guidance on next steps
* **Loading States**: Show skeleton content or progress indicators

## Performance
* **Image Optimization**: Use WebP format when possible, include alt text
* **Lazy Loading**: Implement for images and non-critical content
* **Bundle Size**: Keep component files focused and import only what's needed
* **Caching**: Cache API responses and static assets appropriately

## Yellow Theme Specific Guidelines
* **Contrast**: Always test yellow elements against white backgrounds for readability
* **Gradients**: Use subtle gradients to add depth without overwhelming users
* **Balance**: Use yellow as accent and primary color, balance with neutral grays and whites
* **Warmth**: The yellow theme should convey warmth, energy, and positivity
* **Professional**: Despite the bright color, maintain professional appearance with proper spacing and typography