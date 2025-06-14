import { expect } from 'chai';
import { createTestContainer, cleanupTestContainer } from '../helpers/setup';
import Base from '../../src/core/Base';

describe('Base', () => {
  describe('Initialization', () => {
    it('should initialize with default options', () => {
      const base = new Base();
      expect(base).to.be.an.instanceOf(Base);
      expect(base._options).to.deep.equal({});
    });

    it('should initialize with provided options', () => {
      const options = { test: true, value: 42 };
      const base = new Base(options);
      expect(base.test).to.be.true;
      expect(base.value).to.equal(42);
    });
  });

  describe('Event Emitter', () => {
    it('should emit events', (done) => {
      const base = new Base();
      base.on('test', (data) => {
        expect(data).to.equal('test data');
        done();
      });
      base.emit('test', 'test data');
    });

    it('should handle multiple events', (done) => {
      const base = new Base();
      let count = 0;
      
      base.on('increment', () => {
        count++;
        if (count === 2) {
          done();
        }
      });

      base.emit('increment');
      base.emit('increment');
    });
  });
});
