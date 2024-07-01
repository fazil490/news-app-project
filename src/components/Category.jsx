const Category = () => {
  return (
    <section className="md:hidden text-brown mx-4 my-2 font-bold flex items-center gap-6">
      <button className="border-r-2 pr-4 border-peach hover:text-peach">All</button>
      <button className="border-r-2 pr-4 border-peach hover:text-peach">Sports</button>
      <button className="border-r-2 pr-4 border-peach hover:text-peach">Nation</button>
      <button className="border-r-2 pr-4 border-peach hover:text-peach">Entertainment</button>
    </section>
  )
}

export default Category