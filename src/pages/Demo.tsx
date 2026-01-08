import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, Calendar, Building2, Mail, User, DollarSign, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const platforms = [
  { id: "google", name: "Google Ads", icon: "🔍" },
  { id: "meta", name: "Meta Ads", icon: "📘" },
  { id: "chatgpt", name: "ChatGPT Ads", icon: "💬" },
  { id: "perplexity", name: "Perplexity Ads", icon: "🔮" },
];

const spendRanges = [
  { id: "under5k", label: "Under $5,000/month" },
  { id: "5k-25k", label: "$5,000 - $25,000/month" },
  { id: "25k-100k", label: "$25,000 - $100,000/month" },
  { id: "over100k", label: "Over $100,000/month" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const Demo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    platforms: [] as string[],
    adSpend: "",
    selectedDate: "",
    selectedTime: "",
  });

  const totalSteps = 4;

  const handlePlatformToggle = (platformId: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platformId)
        ? prev.platforms.filter(p => p !== platformId)
        : [...prev.platforms, platformId]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.company;
      case 2:
        return formData.platforms.length > 0 && formData.adSpend;
      case 3:
        return formData.selectedDate && formData.selectedTime;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (canProceed() && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Demo booked:", formData);
    setStep(totalSteps);
  };

  // Generate next 7 days
  const getDates = () => {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push({
        full: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
      });
    }
    return dates;
  };

  return (
    <Layout hideFooter>
      <section className="min-h-[calc(100vh-4rem)] py-12 px-4">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg cta-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">R</span>
              </div>
            </Link>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Book Your Demo
            </h1>
            <p className="text-muted-foreground">
              See how Ryze can transform your ad performance
            </p>
          </motion.div>

          {/* Progress Bar */}
          {step < totalSteps && (
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Step {step} of {totalSteps - 1}</span>
                <span className="text-sm text-muted-foreground">{Math.round((step / (totalSteps - 1)) * 100)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full cta-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Form Steps */}
          <div className="max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Contact Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Tell us about yourself</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Acme Inc"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Ad Platforms & Spend */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Your advertising setup</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>Which platforms do you use?</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {platforms.map((platform) => (
                          <button
                            key={platform.id}
                            onClick={() => handlePlatformToggle(platform.id)}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                              formData.platforms.includes(platform.id)
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <span className="text-2xl">{platform.icon}</span>
                            <span className="font-medium text-foreground text-sm">{platform.name}</span>
                            {formData.platforms.includes(platform.id) && (
                              <Check className="w-4 h-4 text-primary ml-auto" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Monthly ad spend</Label>
                      <div className="space-y-2">
                        {spendRanges.map((range) => (
                          <button
                            key={range.id}
                            onClick={() => setFormData({ ...formData, adSpend: range.id })}
                            className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                              formData.adSpend === range.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <span className="font-medium text-foreground">{range.label}</span>
                            {formData.adSpend === range.id && (
                              <Check className="w-5 h-5 text-primary" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Schedule */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Pick a time</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>Select a date</Label>
                      <div className="grid grid-cols-7 gap-2">
                        {getDates().map((date) => (
                          <button
                            key={date.full}
                            onClick={() => setFormData({ ...formData, selectedDate: date.full })}
                            className={`p-3 rounded-xl border-2 text-center transition-all ${
                              formData.selectedDate === date.full
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <span className="text-xs text-muted-foreground block">{date.day}</span>
                            <span className="text-lg font-semibold text-foreground">{date.date}</span>
                            <span className="text-xs text-muted-foreground block">{date.month}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Select a time (EST)</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setFormData({ ...formData, selectedTime: time })}
                            className={`p-3 rounded-xl border-2 text-center transition-all ${
                              formData.selectedTime === time
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <span className="text-sm font-medium text-foreground">{time}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl border border-border p-8 text-center"
                >
                  <div className="w-20 h-20 rounded-full cta-gradient flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Sparkles className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                    You're all set! 🎉
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    We've sent a calendar invite to <strong className="text-foreground">{formData.email}</strong>
                  </p>

                  <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
                    <h3 className="font-semibold text-foreground mb-4">Demo Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="text-foreground font-medium">
                          {new Date(formData.selectedDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="text-foreground font-medium">{formData.selectedTime} EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground font-medium">30 minutes</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="#" target="_blank">Add to Calendar</a>
                    </Button>
                    <Button variant="hero" className="flex-1" asChild>
                      <Link to="/features">Explore Features</Link>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < totalSteps && (
              <div className="flex justify-between mt-6">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={step === 1 ? "invisible" : ""}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  variant="hero"
                  onClick={step === 3 ? handleSubmit : handleNext}
                  disabled={!canProceed()}
                  className="group"
                >
                  {step === 3 ? "Book Demo" : "Continue"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
