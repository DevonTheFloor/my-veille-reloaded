import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/HomeView.vue'
import { mount } from '@vue/test-utils'
import MyHeader from '../MyHeader.vue'
import { RouterLinkStub } from '@vue/test-utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/userspages/myune/:login',
      name: 'myune',
      component: ()=> import ('../views/MyUne.vue')
    },
    {
      path: '/userspages/alire/:login',
      name: 'alire',
      component: () => import ('../views/ALIre.vue')
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: ()=> import ('../views/DashBoard.vue')
    }

  ]
})
vi.mock('vue-router')

describe('MyHeader an header component with links and avatar', () => {

  useRouter.mockReturnValue({
    push: vi.fn(),
  })

  beforeEach(() => {
    useRouter().push.mockReset()
  })

  it('affiche le titre correct', async () => {
    const wrapper = mount(MyHeader);
    const titre = wrapper.find('.bann h1[class="dark"]');
    expect(titre.text()).toBe('My Veille');

  });

  it('affiche le sous-titre correct', async () => {
    const wrapper = mount(MyHeader); // Assurez-vous que MyComponent rend le template donné
    const sousTitre = wrapper.find('h2.sub-head-title');
    expect(sousTitre.text()).toBe("Veille technologique sur le développement web et l'actualité de l'internet.");
  });
    
  /*it('affiche le texte mobile correct', () => {
    const wrapper = mount(MyHeader);
    const texteMobile = wrapper.find('h2.sub-title-mobile');
    expect(texteMobile.text()).toBe('Dev Web');
  });

  it('affiche le lien vers My Une avec le login correct', () => {
    const login = 'monlogin';
    const wrapper = mount(MyHeader, {
      propsData: {
        login: login,
      },
    });
    const lienMyUne = wrapper.find('router-link[to="/userspages/myune/' + login + '"]');
    expect(lienMyUne.exists()).toBe(true);
  });

  it('affiche le lien vers A lire avec le login correct', () => {
    const login = 'monlogin';
    const wrapper = mount(MyHeader, {
      propsData: {
        login: login,
      },
    });
    const lienALire = wrapper.find('router-link[to="/userspages/alire/' + login + '"]');
    expect(lienALire.exists()).toBe(true);
  });

  it('déclenche la déconnexion lors du clic sur Déconnexion', () => {
    const disconnectMock = vi.fn();
    const wrapper = mount(MyHeader, {
      methods: {
        disconnect: disconnectMock,
      },
    });
    const boutonDeconnexion = wrapper.find('.navbarre.disco');
    boutonDeconnexion.trigger('click');
    expect(disconnectMock).toHaveBeenCalled();
  });*/
})
