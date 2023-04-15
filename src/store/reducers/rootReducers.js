// eslint-disable-next-line
import React from 'react'

const initState = {
	languages: [
		{ id: 1, lang: 'Chinese' },
		{ id: 2, lang: 'Vietnamese' },
	],
	post: [],
}
const rootReducers = (state = initState, action) => {
	switch (action.type) {
		case 'DELETE_LANGUAGE':
			console.log('>>> run into delete languages: ', action)
			let languages = state.languages
			languages = languages.filter((item) => item.id !== action.payload.id)
			return { ...state, languages }
		case 'CREATE_LANGUAGE':
			let id = Math.floor(Math.random() * 10000)
			let lang = { id: id, lang: `random - ${id}` }
			return {
				state,
				languages: [...state.languages, lang],
			}
		default:
			return state
	}
}

export default rootReducers
