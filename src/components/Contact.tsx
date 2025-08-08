import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-2xl font-bold text-foreground">
          Contact Information
        </h2>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p className="text-muted-foreground">rugiracelse13@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <p className="text-muted-foreground">+250784764732</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Location</p>
              <p className="text-muted-foreground">Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
