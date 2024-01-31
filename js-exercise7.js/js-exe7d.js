let a = [
    [1,2],
    [
      [3,4]
    ],
    [
      [[5],[6]]
    ]
  ];
  
  const flatten = arr => arr.reduce((a, v) => {
    v instanceof Array ? flatten(v) : a.push(v);
    return a;
  }, [])
  
  
  console.log(flatten(a))