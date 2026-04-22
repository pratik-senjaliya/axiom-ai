export const metadata = {
  title: "Sanity Studio",
  description: "Sync Origin Content Management",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
