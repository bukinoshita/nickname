import test from 'ava'
import nickname from './..'

test(t => {
  t.true(nickname.all.length > 50)
  t.not(nickname.random(), nickname.random())
})
