# News App

This is a simple React Native news application that fetches and displays news articles from the BBC News API. The app features a swipe button to initiate the fetching of news articles.

## Features

- Swipe button to fetch news
- Displays news articles in a card format
- Responsive design for both web and mobile

## Installation

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- Node.js (v16.x.x or later)
- npm or yarn
- Expo CLI

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Sankeerth-g7/news-app-expo.git
cd news_app
```

2. Install the dependencies:

```bash
npm install
```

3. Start the Expo server:

```bash
expo start
```

4. Open the Expo Go app on your mobile device and scan the QR code to run the app.

## Technologies

- React Native
- Expo

## Project Structure
news_app/
├── app/
│   ├── tabs/
│   │   └── index.tsx
│   ├── components/
│   │   ├── SwipeButton.tsx
│   │   └── NewsCard.tsx
│   └── App.tsx
├── .env
├── babel.config.js
├── package.json
└── README.md
