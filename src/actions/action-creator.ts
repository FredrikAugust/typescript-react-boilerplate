/**
 * This is used to create the actions later on.
 *
 * This returns an ActionCreator instance which will have a function `create`;
 * this function has the type parameter of the payload set, so we ensure that
 * when we create a new action, the payload will be in the format specified.
 *
 * This saves us from accidentally dispatching a faulty action later.
 * 
 * @export
 * @author plotrwitek
 * @class ActionCreator
 * @template T the `type` of the action
 * @template P the type of the `payload`. Used in `ActionCreator.create`
 */
export class ActionCreator<T, P> {
  readonly type: T;
  readonly payload: P;

  /**
   * Creates an `ActionCreator` with the `type` preset to the `type`(`T`) of the `type`.
   * 
   * @param {T} type
   * @memberof ActionCreator
   */
  constructor(type: T) {
    this.type = type;
  }

  /**
   * Creates an action with a `payload` of type `P`.
   * 
   * @param payload The data of the action
   * @memberof ActionCreator
   */
  create = (payload: P) => ({
    type: this.type,
    payload
  });
}