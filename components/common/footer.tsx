import { Mail, MapPin, Instagram } from "lucide-react";

export default async function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/20 py-8 print:hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
        <div>
          <h2 className="font-semibold text-lg">Govt. L P School Vengody</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Nurturing young minds for a brighter future.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:lpsvengody@gmail.com" className="hover:underline">
              lpsvengody@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              Government LP School Vengody, Vengody, Elappully, Palakkad, Kerala
              678622
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            <a
              href="https://www.instagram.com/glps_vengody/"
              target="_blank"
              className="hover:underline"
            >
              @glps_vengody
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground mt-8 px-4">
        © 2026 Govt. L P School Vengody. All rights reserved.
      </div>
    </footer>
  );
}
