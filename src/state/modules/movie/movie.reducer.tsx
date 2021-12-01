// create new variable type
interface Movie {}
// declare initial state array type of Movie
const initialState: Movie[] = [];

// reducer exports function which returns state
// use initial state as a default value
const reducer = (state = initialState, action: { type: string }) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
