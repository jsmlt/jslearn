// Internal dependencies
import LinAlg from '../math/linalg';
import Kernel from './base';

class LinearKernel extends Kernel {
  /**
   * @see jsmlt.Kernel.Kernel::apply()
   */
  apply(x, y) {
    return LinAlg.dot(x, y);
  }
}

export default LinearKernel;
