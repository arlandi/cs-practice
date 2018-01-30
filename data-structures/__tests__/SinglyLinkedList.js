import SinglyLinkedList from '../SinglyLinkedList';

describe('SinglyLinkedList', () => {
  test('constructor', () => {
    const sll = new SinglyLinkedList();
    expect(sll).toBeTruthy();
    expect(sll.length).toBe(0);
  });

  test('add()', () => {
    const sll = new SinglyLinkedList();
    expect(sll.toArray()).toEqual([]);
    sll.add(100);
    expect(sll.length).toBe(1);
    expect(sll.toArray()).toEqual([100]);
    sll.add(200);
    expect(sll.length).toBe(2);
    expect(sll.toArray()).toEqual([100, 200]);
  });

  test('get()', () => {
    const sll = new SinglyLinkedList();
    expect(sll.get(0)).toBe(undefined);
    sll.add(100);
    sll.add(200);
    expect(sll.get(0)).toBe(100);
    expect(sll.get(1)).toBe(200);
    sll.add(300);
    expect(sll.get(2)).toBe(300);
  });

  test('insert()', () => {
    const sll = new SinglyLinkedList();
    sll.add(100);
    sll.add(200);
    sll.add(300);
    sll.add(400);
    sll.add(500);
    sll.insert(1, 0);
    expect(sll.get(0)).toBe(1);
    sll.insert(2, 6);
    expect(sll.get(6)).toBe(2);
  });

  test('remove()', () => {
    const sll = new SinglyLinkedList();
    sll.add(100);
    sll.add(200);
    sll.add(300);
    sll.add(400);
    sll.add(500);
    sll.remove(4);
    expect(sll.toArray()).toEqual([100, 200, 300, 400]);
  });
});
