/**
 * Connect two indexes.
 *
 * @param {array} ids All indexes and connections.
 * @param {number} from From index.
 * @param {number} to To index.
 */
function union (ids, from, to) {
  const fromValue = ids[from]
  const toValue = ids[to]

  return ids.map(
    iif(
      value => value === fromValue,
      _value => toValue,
      value => value
    )
  )
}

/**
 * Is two indexes connected?
 *
 * @param {array} ids All indexes and connections.
 * @param {number} from From index.
 * @param {number} to To index.
 */
function isConnected (ids, from, to) {
  return ids[from] === ids[to]
}