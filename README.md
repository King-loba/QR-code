# QR Code Scanner

A simple React-based QR code scanner that allows users to scan QR codes using their device camera, display the decoded data, and maintain a history of scanned codes.

---

## Features

- **QR Code Scanning**: Uses the device camera to scan QR codes.
- **Decoded Data Display**: Displays the decoded information in real-time.
- **Scan History**: Keeps a list of previously scanned QR codes.
- **Copy to Clipboard**: Allows users to copy scanned data with a single click.
- **Responsive Design**: Works seamlessly across devices.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qr-code-scanner.git
   ```
2. Navigate to the project directory:
   ```bash
   cd qr-code-scanner
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## Usage

1. Open the app in your browser.
2. Grant camera access when prompted.
3. Point your device camera at a QR code.
4. The decoded data will appear on the screen.
5. View your scan history and copy data to the clipboard as needed.

---

## Project Structure

```
qr-code-scanner/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── QRScanner.js
│   │   ├── HistoryList.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── package.json
└── README.md
```

### Key Components

- **QRScanner**: Handles QR code scanning using the device camera.
- **HistoryList**: Displays a list of previously scanned QR codes.

---

## Dependencies

- **React**: Framework for building the user interface.
- **qr-scanner**: Library for QR code scanning.
- **CSS**: For styling the app.

---

## Future Enhancements

- Add the ability to upload QR code images for scanning.
- Save scan history to local storage for persistence.
- Implement dark mode for better usability.
- Enhance error handling and provide user feedback for invalid QR codes.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [qr-scanner Library](https://github.com/nimiq/qr-scanner)



