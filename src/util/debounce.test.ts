import { debounce } from './debounce'

jest.useFakeTimers('modern')
describe('Debounce', () => {
  let func: jest.Mock
  let debouncedFunc: () => void

  beforeEach(() => {
    func = jest.fn()
    debouncedFunc = debounce(func, 1000)
  })
  test('Should call debounce function', () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc()
    }

    jest.runAllTimers()

    expect(func).toBeCalledTimes(1)
  })
})
