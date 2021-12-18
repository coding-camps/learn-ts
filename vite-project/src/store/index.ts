import { defineStore, StoreDefinition } from 'pinia'

export const useStore: StoreDefinition = defineStore(
    'main',
    {
        state() {
            return {
                userInfo: {},
                token: '',
            }
        },
        actions: {
            setUserInfo(userInfo) {
                this.userInfo = userInfo;
            },
            setToken(token) {
                this.token = token;
            }
        },
        persist: {
            key: 'userData',
            storage: window.sessionStorage,
            paths: ['userInfo', 'token'],
            overwrite: true,
        },
    }
)
