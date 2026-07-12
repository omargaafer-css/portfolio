# ApexBank - Modern Web Banking FrontEnd

ApexBank is a modern, responsive, and feature-rich static web banking application interface. Built using semantic HTML5, vanilla CSS, and JavaScript, it provides a premium, interactive user experience modeling a next-generation retail banking dashboard.

---

## 🎨 Key Interface Features

* **Interactive Landing Page (`index.html`)**: Beautiful homepage showing product offerings, interest rates, customer reviews, and responsive call-to-actions.
* **Secure Authentication Flow (`login.html` & `register.html`)**: Polished login and registration templates with client-side form validation.
* **Customer Dashboard (`dashboard.html`)**: Overview of accounts, recent transaction history charts, balance tracking cards, and quick transfer shortcuts.
* **Fund Transfer Dashboard (`transfer.html`)**: Form interface to specify beneficiary account, bank routing codes, amount, and category tags.
* **Branch Locator (`branches.html`)**: Responsive overview of physical branch networks, operating hours, and location services.
* **Appointment Booking (`booking.html`)**: Customer calendar tool to schedule meetings with account managers.
* **Profile & Settings UI (`profile.html` & `settings.html`)**: User profile, contact cards, security password reset forms, and display mode toggles.
* **Admin Control Center (`admin.html`)**: Analytical panels for system administrators to audit logs, approve transfers, and monitor platform performance metrics.

---

## 🛠️ Technology Stack

* **Structure**: Semantic HTML5 markup
* **Styling**: Vanilla CSS3 (using CSS custom properties/variables for color consistency, glassmorphic UI cards, and responsive grid/flexbox layouts)
* **Logic & Animations**: Pure Vanilla JavaScript (handling event validation, page transitions, and simulated storage data)

---

## ⚙️ Running Locally

To serve the files locally using a lightweight HTTP server:

* **Using Python**:
  ```bash
  python -m http.server 8080
  ```
  Then open **[http://localhost:8080](http://localhost:8080)** in your web browser.

* **Using Node.js (`live-server`)**:
  ```bash
  npm install -g live-server
  live-server
  ```
