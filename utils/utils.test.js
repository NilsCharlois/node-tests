const utils = require('./utils');
const expect = require('expect');

describe('Utils', ()=>{
  it('should add two numbers', ()=>{
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3,(sum) => {
    expect(sum).toBe(7).toBeA('number')
    done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4,(res) => {
    expect(res).toBe(16).toBeA('number')
    done();
    });
  });

  it('should square a number', ()=>{
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
  });

  // should verify first and last names are set
  it('should verify first and last names are set', ()=>{
    var user = {location:'Dublin', age:25};
    var res = utils.setName(user, 'Nils Me');

    expect(res).toInclude({firstName:'Nils', lastName:'Me'})
  });


  /*
  it('shoudl expect some values', ()=>{
    //expect(12).toNotBe(11);
    //expect({name:'Nils'}).toNotEqual({name:'nils'});
    //expect([2,3,4]).toExclude(5)
    expect({
      name:'Nils',
      age:31,
      location:'here'
    }).toInclude({age:31})
  });
  */
});
