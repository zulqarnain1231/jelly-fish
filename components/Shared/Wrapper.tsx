interface Props {
  id?: string;
  style?: string;
  children: React.ReactNode;
}

function Wrapper({ id, children, style }: Props) {
  return (
    <section id={id} className={style}>
      <div className="w-full h-full max-w-[1420px] mx-auto md:px-10 px-4">
        {children}
      </div>
    </section>
  );
}

export default Wrapper;
