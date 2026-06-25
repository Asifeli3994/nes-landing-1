const { keyboard, mouse, Button, Key } = require('@nut-tree-fork/nut-js')

mouse.config.mouseSpeed = 600

async function executeAction(action) {
  switch (action.action) {
    case 'screenshot':
      break // el bucle ya captura en la siguiente iteración

    case 'left_click':
      await mouse.move([{ x: action.coordinate[0], y: action.coordinate[1] }])
      await mouse.click(Button.LEFT)
      break

    case 'right_click':
      await mouse.move([{ x: action.coordinate[0], y: action.coordinate[1] }])
      await mouse.click(Button.RIGHT)
      break

    case 'double_click':
      await mouse.move([{ x: action.coordinate[0], y: action.coordinate[1] }])
      await mouse.doubleClick(Button.LEFT)
      break

    case 'type':
      await keyboard.type(action.text)
      break

    case 'key':
      await pressKey(action.key)
      break

    case 'scroll':
      await mouse.move([{ x: action.coordinate[0], y: action.coordinate[1] }])
      if (action.direction === 'down') await mouse.scrollDown(action.amount ?? 3)
      else await mouse.scrollUp(action.amount ?? 3)
      break

    case 'mouse_move':
      await mouse.move([{ x: action.coordinate[0], y: action.coordinate[1] }])
      break

    case 'left_click_drag':
      await mouse.move([{ x: action.startCoordinate[0], y: action.startCoordinate[1] }])
      await mouse.pressButton(Button.LEFT)
      await mouse.move([{ x: action.coordinate[0], y: action.coordinate[1] }])
      await mouse.releaseButton(Button.LEFT)
      break

    default:
      console.warn('Acción desconocida:', action.action)
  }
}

async function pressKey(keyString) {
  const keyMap = {
    Return: Key.Return, Enter: Key.Return,
    Escape: Key.Escape, Tab: Key.Tab,
    BackSpace: Key.Backspace, Delete: Key.Delete,
    Up: Key.Up, Down: Key.Down, Left: Key.Left, Right: Key.Right,
    space: Key.Space, Home: Key.Home, End: Key.End,
    Page_Up: Key.PageUp, Page_Down: Key.PageDown,
    F1: Key.F1, F2: Key.F2, F3: Key.F3, F4: Key.F4,
    F5: Key.F5, F11: Key.F11, F12: Key.F12
  }

  if (keyString.includes('+')) {
    const parts = keyString.split('+')
    const modKeys = parts.slice(0, -1).map(k => ({
      ctrl: Key.LeftControl, alt: Key.LeftAlt,
      shift: Key.LeftShift, super: Key.LeftSuper
    }[k.toLowerCase()]))
    const main = keyMap[parts.at(-1)] ?? Key[parts.at(-1)]
    if (main) {
      await keyboard.pressKey(...modKeys, main)
      await keyboard.releaseKey(...modKeys, main)
    }
  } else {
    const k = keyMap[keyString] ?? Key[keyString]
    if (k) {
      await keyboard.pressKey(k)
      await keyboard.releaseKey(k)
    }
  }
}

module.exports = { executeAction }
