import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container-center bg-black">
      <div className="w-[1536px] mx-10">
        <div className="flex items-start justify-center flex-1 gap-14 pt-32 pb-20 max-md:flex-col max-md:pt-14">
          <div className="flex items-start justify-start gap-10 flex-col flex-1">
            <span className="primary-gradient text-3xl">
              PostFlow: Write it, tweak it, share it — <br />
              all happens in one place
            </span>
            <div className="container-center gap-3">
              <div className="container-center p-3 bg-hover rounded-lg">
                <Image src="/send.svg" alt="send" width={24} height={24} />
              </div>
              <span className="text-white text-xl">hello@postflow.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 flex-1">
            <span className="primary-gradient text-3xl">Who Are We?</span>
            <p className="text-gray-600">
              Explore this Next.js dashboard demo showcasing CRUD operations
              with JSONPlaceholder API. Built with React Query for seamless data
              fetching, TailwindCSS for modern styling, and shadcn/ui components
              for professional UI. Features post management (create, read,
              update, delete) with rich text editing, public post listings, and
              responsive design. A technical test implementation highlighting
              Next.js best practices, clean architecture, and attention to UX
              detail.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-6 text-primary border-t-[0.1px] border-gray-800 max-md:flex-col max-md:gap-8">
          <div>
            © 2025 - Developed With 💙 by
            <a
              href="https://github.com/mohammedelgammal"
              target="_blank"
              className="text-white hover:text-hover"
            >
              {" "}
              Mohammed Elgammal
            </a>
          </div>
          <div className="container-center gap-5">
            <Image
              className="translate-y-0.5"
              src="/social/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
            <Image
              src="/social/facebook.svg"
              alt="facebook"
              width={20}
              height={20}
            />
            <Image
              src="/social/linkedin.svg"
              alt="linkedin"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
