
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our launch notification list.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sawariyaan-green focus:border-transparent"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-sawariyaan-green hover:bg-sawariyaan-green/90 text-white px-6 py-3"
        >
          {isSubmitting ? "Joining..." : "Notify Me"}
        </Button>
      </form>
      <p className="text-sm text-gray-200 mt-3 text-center">
        Be the first to know when SAWARIYAAN launches!
      </p>
    </div>
  );
};

export default EmailSignup;
