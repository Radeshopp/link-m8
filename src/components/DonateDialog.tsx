import { useState } from "react";
import { Heart, X, Check, Copy, QrCode, Smartphone } from "lucide-react";
import { QRCodeComponent } from "./QRCodeComponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface DonateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PRESET_AMOUNTS = [5, 10, 25, 50, 100];

export const DonateDialog = ({ open, onOpenChange }: DonateDialogProps) => {
  const { toast } = useToast();
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("direct");
  const [copiedQR, setCopiedQR] = useState(false);

  const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : null);

  const getPayPalUrl = (donationAmount: number | null) => {
    if (!donationAmount || donationAmount <= 0) {
      return "https://www.paypal.com/donate/?hosted_button_id=2WXJPFWJZ8382";
    }
    // استخدام رابط الـ donate الأصلي مع المبلغ
    return `https://www.paypal.com/donate/?hosted_button_id=2WXJPFWJZ8382&amount=${donationAmount.toFixed(2)}`;
  };

  const qrCodeUrl = getPayPalUrl(amount as number);

  const handlePresetClick = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleDonate = async () => {
    if (!customAmount || parseFloat(customAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Show success message first
      setSuccess(true);

      // Wait for 3 seconds to show the thank you message
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Then redirect to PayPal
      const paypalUrl = getPayPalUrl(parseFloat(customAmount));
      window.open(paypalUrl, "_blank");

      // Close the dialog after a short delay
      setTimeout(() => {
        setSuccess(false);
        onOpenChange(false);
        setSelectedAmount(null);
        setCustomAmount("");
        setActiveTab("direct");
      }, 1000);
    } catch (error) {
      console.error("Donation error:", error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopyQR = () => {
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select an amount first",
        variant: "destructive",
      });
      return;
    }
    
    const paypalUrl = getPayPalUrl(amount);
    navigator.clipboard.writeText(paypalUrl);
    setCopiedQR(true);
    toast({
      title: "Copied!",
      description: "PayPal donation link copied to clipboard",
    });
    setTimeout(() => setCopiedQR(false), 2000);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setSuccess(false);
      setSelectedAmount(null);
      setCustomAmount("");
      setActiveTab("direct");
      setCopiedQR(false);
    }
    onOpenChange(newOpen);
  };

  if (success) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-blue-500/30 shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 opacity-50"></div>
            
            <div className="relative flex flex-col items-center justify-center py-16 px-6">
              {/* Animated checkmark circle */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 rounded-full p-8 shadow-2xl shadow-green-500/50 animate-bounce">
                  <Check size={56} className="text-white animate-pulse" />
                </div>
              </div>

              {/* Main message */}
              <h2 className="text-4xl font-bold text-white mb-4 text-center leading-tight">
                Thank You! 🎉
              </h2>

              {/* Amount display */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg px-6 py-4 mb-6 w-full">
                <p className="text-slate-300 text-sm text-center mb-1">Your Generous Donation</p>
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-300 via-emerald-300 to-cyan-300 bg-clip-text text-center">
                  ${customAmount}
                </p>
              </div>

              {/* Appreciation message */}
              <p className="text-slate-300 text-center text-lg mb-6 font-medium">
                Your support means everything to us!
              </p>

              {/* Benefits list */}
              <div className="w-full space-y-3 mb-8 bg-slate-800/30 rounded-lg p-4">
                <p className="text-slate-300 text-sm font-semibold text-center mb-3">
                  Thanks to your donation:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </span>
                    We can maintain our servers and infrastructure
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </span>
                    We can develop new features for you
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </span>
                    We keep our service free for everyone
                  </li>
                </ul>
              </div>

              {/* Redirect info */}
              <div className="text-center space-y-2">
                <p className="text-slate-400 text-sm">
                  You will be redirected to PayPal to complete the payment...
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full"></span>
                  <span className="text-slate-500 text-xs">Processing</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-2xl md:max-w-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-blue-500/30 shadow-2xl rounded-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b border-slate-700/30">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-full p-3 shadow-lg shadow-red-500/30">
              <Heart size={28} className="text-white fill-white" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold text-transparent bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text">
                Support Our Project
              </DialogTitle>
              <DialogDescription className="text-slate-400 mt-1">
                Help us keep this service free and continuously improved
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full pt-6">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-700/50 p-1 mb-6">
            <TabsTrigger
              value="direct"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              <span className="flex items-center gap-2">
                <Smartphone size={16} />
                Direct Donation
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="qr"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              <span className="flex items-center gap-2">
                <QrCode size={16} />
                QR Code
              </span>
            </TabsTrigger>
          </TabsList>

          {/* Direct Donation Tab */}
          <TabsContent value="direct" className="space-y-6">
            {/* Custom Amount */}
            <div>
              <Label className="text-slate-300 font-semibold mb-3 block">
                Enter Donation Amount (USD)
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={customAmount}
                  onChange={handleCustomChange}
                  min="0"
                  step="0.01"
                  className="pl-8 h-12 bg-slate-800/50 border-2 border-slate-700/50 text-white placeholder-slate-500 focus:border-red-500/50 focus:ring-red-500/20 text-lg font-semibold"
                />
              </div>
            </div>

            {/* Amount Summary */}
            {customAmount && parseFloat(customAmount) > 0 && (
              <div className="bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border-2 border-blue-500/30 rounded-xl p-5 backdrop-blur-sm">
                <p className="text-slate-300 text-sm mb-2 font-medium">
                  Your Donation Amount
                </p>
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">
                  ${parseFloat(customAmount).toFixed(2)}
                </p>
              </div>
            )}

            {/* PayPal Info */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 bg-gradient-to-r from-[#003087] to-[#009cde] rounded flex items-center justify-center text-white text-xs font-bold">
                  PP
                </div>
                <p className="text-sm text-slate-300 font-semibold">
                  Secure PayPal Payment
                </p>
              </div>
              <p className="text-xs text-slate-400">
                100% secure • Your payment information is protected • Instant processing
              </p>
            </div>

            {/* Donation Benefits */}
            <div className="space-y-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-slate-300 text-sm font-bold flex items-center gap-2">
                <Heart size={18} className="text-red-400" /> Your donation helps us:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="text-emerald-400 font-bold">✓</span> Maintain robust servers and infrastructure
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="text-emerald-400 font-bold">✓</span> Develop new features and improvements
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="text-emerald-400 font-bold">✓</span> Keep the service free for everyone
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => handleOpenChange(false)}
                className="flex-1 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 h-11 text-base font-semibold"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDonate}
                disabled={!customAmount || parseFloat(customAmount) <= 0 || isProcessing}
                className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold shadow-lg shadow-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed h-11 text-base"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span> Redirecting to PayPal...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Heart size={20} className="fill-current" /> Proceed to PayPal
                  </span>
                )}
              </Button>
            </div>
          </TabsContent>

          {/* QR Code Tab */}
          <TabsContent value="qr" className="space-y-6">
            <div className="flex flex-col items-center gap-6">
              {/* QR Code */}
              <div className="bg-white p-4 rounded-xl shadow-xl">
                {amount && amount > 0 ? (
                  <QRCodeComponent
                    value={qrCodeUrl}
                    size={256}
                    level="H"
                    includeMargin={true}
                    className="w-full h-auto max-w-xs"
                  />
                ) : (
                  <div className="w-64 h-64 bg-slate-800 rounded-lg flex items-center justify-center">
                    <p className="text-slate-500 text-center px-4">
                      Select an amount first to generate QR code
                    </p>
                  </div>
                )}
              </div>

              {/* Amount Selection for QR */}
              <div className="w-full space-y-4">
                <Label className="text-slate-300 font-semibold block">
                  Enter Amount for QR Code (USD)
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">
                    $
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={customAmount}
                    onChange={handleCustomChange}
                    min="0"
                    step="0.01"
                    className="pl-8 h-11 bg-slate-800/50 border-2 border-slate-700/50 text-white"
                  />
                </div>
              </div>

              {/* Custom Amount for QR */}
              <div className="w-full">
                <Label className="text-slate-300 font-semibold mb-2 block">
                  Amount Preview
                </Label>
                {customAmount && parseFloat(customAmount) > 0 && (
                  <div className="bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border-2 border-blue-500/30 rounded-lg p-4 text-center">
                    <p className="text-slate-300 text-sm mb-1">Donation Amount</p>
                    <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">
                      ${parseFloat(customAmount).toFixed(2)}
                    </p>
                  </div>
                )}
              </div>

              {/* QR Code Instructions */}
              <div className="w-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4 space-y-2">
                <p className="text-sm text-slate-300 font-semibold">📱 How to Use:</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>✓ Scan the QR code with your mobile device</li>
                  <li>✓ You'll be redirected to PayPal payment page</li>
                  <li>✓ Complete the donation securely</li>
                </ul>
              </div>

              {/* Direct Donate Button */}
              <Button
                onClick={handleDonate}
                disabled={!customAmount || parseFloat(customAmount) <= 0 || isProcessing}
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold shadow-lg shadow-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed h-11"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span> Redirecting to PayPal...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Heart size={20} className="fill-current" /> Proceed to PayPal
                  </span>
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
