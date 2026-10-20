function Training({ math, setmath }) {
  return (
    <div>
      <h2>今までの食事</h2>

      {math.filter((menu) => menu.name !== '' || menu.count !== '').map((menu) => (
        <p>{menu.name}: {menu.count}</p>
      ))}

      <input
      type='checkbox'
      >
        
      </input>
    </div>
  );
}

export default Training;