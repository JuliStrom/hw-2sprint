import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortPeople = [...state]
            if (action.payload === 'up') {
                sortPeople.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                sortPeople.sort((a, b) => b.name.localeCompare(a.name))
            }
            return sortPeople // need to fix
        }
        case 'check': {
            return state.filter(p => p.age > action.payload) // need to fix
        }
        default:
            return state
    }
}
