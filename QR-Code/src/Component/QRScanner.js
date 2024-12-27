import React, { useRef, useEffect } from "react";
import QRScannerLib from "qr-scanner";

const QRScanner = ({ onScan }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const qrScanner = new QRScannerLib(videoRef.current, (result) => {
      onScan(result.data);
    });

    qrScanner.start();

    return () => qrScanner.destroy();
  }, [onScan]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default QRScanner;
