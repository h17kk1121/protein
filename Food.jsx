import { useState} from 'react';

function Food({math, setmath}) {
  const [eat, seteat] = useState({ name: '', count: '' });

 
  const [real, setreal] = useState(false);
  const [selectMenu, setselectMenu] = useState(null);
  const [anytime, setanytime]=useState({'name': '', 'count': ''});

 

  return (
    <div>
      <h2>本日の食事内容</h2>

      <input
        type="text"
        value={eat.name}
        onChange={(e) => seteat({ ...eat, name: e.target.value })}
      />

      <input
        type="number"
        value={eat.count}
        onChange={(e) => seteat({ ...eat, count: e.target.value })}
      />

     <button onClick={() => {
  if (eat.name === '' || eat.count === '') {
    return;
  }

  setmath([...math, { ...eat, check: false }]);
  seteat({ name: '', count: '' });
  setanytime({name: eat.name, count: eat.count});
}}>
  保存
</button>

      {math.map((menu) => (
        <div key={menu.name}>
          <p>
            {menu.name}：{menu.count}
          </p>

          <img
            className="batu"
            src="/picture/OIP.webp"
            alt="削除"
            onClick={() => {
              setselectMenu(menu);
              setreal(true);
            }}
          />

          <input
            type="checkbox"
            checked={!!menu.check}
            onChange={(e) =>
              setmath(
                math.map((item) =>
                  item === menu
                    ? { ...item, check: e.target.checked }
                    : item
                )
              )
            }
          />
        </div>
      ))}

      <p>
        合計：
        {math
          .filter((menu) => menu.check)
          .reduce((total, menu) => total + Number(menu.count), 0)}
      </p>

      {math
        .filter((menu) => menu.check)
        .reduce((total, menu) => total + Number(menu.count), 0) >= 2700
        ? <p>これ以上食べたら太るけど筋肉増！</p>
        : <p>痩せるけど筋肉減</p>
      }

      {real && (
        <div className="warning">
          <p>本当に削除する？</p>

          <button onClick={() => {
            setmath(math.filter((item) => item !== selectMenu));
            setreal(false);
            setselectMenu(null);
          }}>
            削除
          </button>

          <button onClick={() => {
            setreal(false);
            setselectMenu(null);
          }}>
            いいえ
          </button>
        </div>
      )}
    </div>
  );
}

export default Food;

