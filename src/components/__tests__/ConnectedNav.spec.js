import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ConnectedNav from '../ConnectedNav.vue'
import { RouterLinkStub } from '@vue/test-utils'
import { RouterLink } from 'vue-router'

const TEST_STRING = 'this is a test string'

describe('ConnectedNav', () => {
  it(`should transform 'to' into '{ name: to }'`, () => {
    const wrapper = mount(ConnectedNav, {
      props: {
        to: '/dashboard/'
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findComponent(RouterLink).props('to')).toEqual({
      name: 'DashBoard'
    })
  })
})