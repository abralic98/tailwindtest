export const MainTitle = ({ children }) => {
  return <h1 className="text-3xl">{children}</h1>; // should be one on every page for SEO friendly
};

export const BigTitle = ({ children }) => {
  return (
    <h2 className="sm:text-bigTitleSm md:text-bigTitleMd lg:text-bigTitleLg xl:text-bigTitleXl font-FuturaPTBold">
      {children}
    </h2>
  );
};
export const SmallTitle = ({ children }) => {
  return <h2 className="text-s">{children}</h2>;
};

export const Text = ({ children }) => {
  return <p className="sm:text-textSm md:text-textMd lg:textXl">{children}</p>;
};
