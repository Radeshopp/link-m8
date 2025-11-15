import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeComponentProps {
  value: string;
  size?: number;
  level?: "L" | "M" | "Q" | "H";
  includeMargin?: boolean;
  className?: string;
}

export const QRCodeComponent = ({
  value,
  size = 256,
  level = "H",
  includeMargin = true,
  className = "",
}: QRCodeComponentProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && value) {
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: includeMargin ? 2 : 0,
          errorCorrectionLevel: level,
          type: "image/png",
          quality: 0.95,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        },
        (error) => {
          if (error) console.error("QR Code generation error:", error);
        }
      );
    }
  }, [value, size, level, includeMargin]);

  return <canvas ref={canvasRef} className={className} />;
};
