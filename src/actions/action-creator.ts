/*
Originally made by:
github@plotrwitek

This is used to create the actions later on.
*/ 
export class ActionCreator<T, P> {
  readonly type: T;
  readonly payload: P;

  constructor(type: T) {
    this.type = type;
  }

  create = (payload: P) => ({
    type: this.type,
    payload
  });
}