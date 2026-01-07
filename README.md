
# 🌿 AgroSmart AI - Modern Farming Suite

[![GitHub license](https://img.shields.io/github/license/khdxsohee/AgroSmart-App-AI-Modern-Farming-Suite?style=for-the-badge&color=059669)](https://github.com/khdxsohee/AgroSmart-App-AI-Modern-Farming-Suite/blob/main/LICENSE)
[![React Version](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini-AI-orange?style=for-the-badge&logo=google-gemini)](https://ai.google.dev/)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-First_UI-emerald?style=for-the-badge)](https://github.com/khdxsohee/AgroSmart-App-AI-Modern-Farming-Suite)

**AgroSmart AI** is a cutting-edge, mobile-first agricultural management platform designed to empower farmers with artificial intelligence. From instant crop disease diagnosis to real-time market trends, this app brings a high-tech laboratory and a financial advisor directly to the palm of a farmer's hand.

---

## ✨ Key Features

### 🩺 AI Crop Doctor
*   **Visual Diagnosis**: Leverage **Gemini 2.5 Flash-Image** to identify pests and diseases by simply uploading a photo of a leaf.
*   **Actionable Solutions**: Receive detailed organic and chemical treatment recommendations tailored to the specific diagnosis.

### 💬 Smart AI Agronomist
*   **24/7 Consultation**: A dedicated chat assistant powered by **Gemini 3 Flash** to answer questions about soil health, irrigation schedules, and seed selection.
*   **Contextual Intelligence**: Maintains conversation history for more accurate, sequential agricultural advice.

### 📈 Live Market Insights
*   **Price Tracking**: Monitor real-time prices for major commodities like Wheat, Corn, and Rice.
*   **Trend Analysis**: Interactive visual charts (powered by **Recharts**) showing price fluctuations and AI-generated market predictions.

### 🌤️ Weather Intelligence
*   **Localized Forecasts**: Real-time temperature, humidity, and wind speed data.
*   **Precision Tips**: AI-generated "Smart Recommendations" that tell farmers exactly what to do based on current weather (e.g., "Postpone fertilization due to upcoming rain").

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) (Functional Components + Hooks)
- **AI Engine**: [Google Gemini API](https://ai.google.dev/) (@google/genai)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Mobile-First, Glassmorphism)
- **Visuals**: [Recharts](https://recharts.org/) (Dynamic Market Charts)
- **Icons**: [HeroIcons](https://heroicons.com/)
- **Font**: Inter (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A Google AI Studio API Key ([Get it here](https://aistudio.google.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khdxsohee/AgroSmart-App-AI-Modern-Farming-Suite.git
   cd AgroSmart-App-AI-Modern-Farming-Suite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

4. **Launch the app**
   ```bash
   npm start
   ```

---

## 📂 Project Structure

```text
├── components/
│   ├── BottomNav.tsx      # Fixed mobile navigation
│   └── WeatherCard.tsx    # AI-powered weather dashboard
├── services/
│   └── geminiService.ts   # Google GenAI API integration logic
├── views/
│   ├── HomeView.tsx       # Main dashboard & charts
│   ├── CropDoctorView.tsx # Image analysis & diagnosis
│   ├── MarketView.tsx     # Commodity price tracking
│   └── ChatView.tsx       # AI Agronomist interface
├── App.tsx                # Main layout and routing logic
├── types.ts               # TypeScript interfaces
└── index.html             # Entry point with Tailwind configuration
```

---

## 📱 UI Design Philosophy

The app is built with a **Smooth & Modern Mobile UI** aesthetic:
- **Glassmorphism**: High-end frosted glass effects for cards and headers.
- **Emerald Palette**: A professional green-themed color scheme representing growth and agriculture.
- **Haptic-Feel Interactions**: Scale-transform animations on button clicks for a native app experience.
- **Micro-animations**: Smooth transitions and loading skeletons for AI processing states.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**Sohee** - [@khdxsohee](https://github.com/khdxsohee)

---
*Developed with ❤️ for the global farming community.*
