<div align="center">
  <h1>
  <img src="https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/public/icon.png" alt="Suvidha Foundation Logo" width="30" />
    Suvidha Foundation Web Platform
  <h1>
    <strong>Empowering communities through education, environment and social welfare</strong>
  </p>
  <p>
    <a href="https://suvidha-foundation-edutech.netlify.app">
      <img src="https://img.shields.io/badge/🚀 Live_Demo_netlify-View_Project-green?style=for-the-badge" />
    </a>
      <a href="https://suvidha-foundation-edutech.vercel.app">
      <img src="https://img.shields.io/badge/🚀 Mirror_vercel-View_Project-green?style=for-the-badge" />
    </a>
  </p>
  <p>
    <a href="#about-the-project">About</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#project-structure">Project Structure</a> •
    <a href="#future-enhancements">Roadmap</a> •
    <a href="#contributing">Contributing</a>
  </p>
  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-000000?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
   <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  </div>
</div>

---

## 📖 About The Project

The **Suvidha Foundation** web platform is a modern, scalable and production-ready web application designed to digitalize the NGO's operations. The platform serves as a central hub for sharing the foundation's mission, showcasing events and galleries and driving engagement through secure donor and internship portals. 

With an intuitive user interface and a high-performance architecture, this project represents a strong commitment to leveraging cutting-edge web technology for social good.


## ✨ Key Features

This platform is divided into comprehensive modules to serve different types of users:

- **🌍 Dynamic Landing Experience**: Engaging Hero section, transparent analytics (via Recharts) and detailed representation of core values.

- **📸 Media & Events**: Dedicated pages to track the latest physical/virtual events and a media gallery showcasing grassroots impact.

- **🤝 Donor Portal**: Secure information, direct contribution workflows and acknowledgments for generous donors (`OurDonors`, `Donor` role).

- **💼 Career & Internship Modules**: Built-in avenues for applying and tracking internships alongside secure employee access (`Internship`, `Employee` portals).

- **🔐 Secure Authentication**: Multi-step authentication flow including Login, Registration and Password Recovery.

- **📱 Fully Responsive**: Pixel-perfect implementation utilizing Tailwind CSS, ensuring flawless rendering across mobile, tablet and desktop devices.

- **🎨 Smooth Animations**: Engaging page transitions and micro-interactions powered seamlessly by Framer Motion.


## 🛠️ Tech Stack

### Frontend Architecture
* **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) for blazing-fast build times and a modern developer experience.

* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for scalable, utility-first UI.

* **Routing:** [React Router DOM](https://reactrouter.com/) for seamless client-side navigation.

* **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid component and page transitions.

* **Data Visualization:** [Recharts](https://recharts.org/) for displaying impact analytics.

* **Icons:** Lucide React & React Icons for high-quality, lightweight scalable vector icons.

### Backend Infrastructure
* The backend is currently under active development. It includes a dedicated backend module (backend/) designed to support Node.js/Express.js APIs and scalable database integrations as the project evolves.

## 📁 File Structure

```text
suvidha-foundation/
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images, logos and global styles
│   │   ├── components/      # Reusable UI components (Hero, Header, Footer, etc.)
│   │   ├── context/         # React Context API for global state management
│   │   ├── pages/           # Route-level pages and portal dashboards
│   │   │   ├── Auth/        # Login, Register, Password Recovery
│   │   │   ├── LandingPage/ # Home modules (Analytics, Features)
│   │   │   ├── Donor/       # Donor engagement workflows
│   │   │   ├── Employee/    # Secure employee internal portal
│   │   │   └── Internship/  # Volunteer/Internship applications
│   │   ├── routes/          # Protected and public route configurations
│   │   ├── utils/           # Helper functions & API connectors
│   │   ├── App.jsx          # Main application wrapper with global routes
│   │   └── main.jsx         # Frontend entry point
│   ├── index.html           # HTML template
│   ├── eslint.config.js     # Linter configuration
│   ├── vite.config.js       # Vite configuration
│   └── package.json         # Frontend dependencies and scripts
├── backend/                 # Backend Server / API Services
└── README.md                # Project documentation
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

* [Node.js](https://nodejs.org/) (v16.x or later recommended)
* `npm` or `yarn` package manager

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/suvidha-foundation.git
   ```

2. **Navigate to the frontend directory**
   ```sh
   cd suvidha-foundation/frontend
   ```

3. **Install NPM packages**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application in your local environment.


## 💡 Why This Project?

This platform was built to bridge the gap between NGOs and digital accessibility by creating a scalable system that simplifies engagement, transparency, and operational efficiency.


## 🔮 Future Enhancements

* Admin dashboard for complete platform control
* Payment gateway integration for donations
* Email automation system
* Real-time analytics dashboard
* CI/CD deployment pipeline
* Mobile application (React Native)


## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request


## 🛡️ License

This project is licensed under the MIT License.


## 💌 Contact

**Suryansh Singh** - [suryanshsinghchauhanthakur@gmail.com](mailto:suryanshsinghchauhanthakur@gmail.com)

**Suvidha Foundation Team** - [info@suvidhafoundationedutech.org](mailto:info@suvidhafoundationedutech.org)

<div align="center">
  <p>Made by Suryansh Singh</p>
</div>
