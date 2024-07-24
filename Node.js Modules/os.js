const os=require('os');
{
 lo=[
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 252020,
        nice: 0,
        sys: 30340,
        idle: 1070356870,
        irq: 0,
      },
    },
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 306960,
        nice: 0,
        sys: 26980,
        idle: 1071569080,
        irq: 0,
      },
    },
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 248450,
        nice: 0,
        sys: 21750,
        idle: 1070919370,
        irq: 0,
      },
    },
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 256880,
        nice: 0,
        sys: 19430,
        idle: 1070905480,
        irq: 20,
      },
    },
  ]
}

  console.log(os.networkInterfaces());
  console.log(os.cpus());