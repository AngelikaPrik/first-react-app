import React, {
	useState
} from "react";
import PropTypes, {
	func
} from "prop-types";

function useInputValue(defaultValue = "") {
	const [value, setValue] = useState(defaultValue);

	return {
		bind: {
			value,
			onChange: event => setValue(event.target.value)
		},
		clear: () => setValue(""),
		value: () => value
	}
}

function AddTodo({
	onCreate
}) {
	const input = useInputValue("")

	function submitHadler(event) {
		event.preventDefault();

		if (input.value().trim()) {
			onCreate(input.value());
			input.clear();
		}

	}

	return ( <
		form className = "form-block"
		onSubmit = {
			submitHadler
		} >
		<
		input {
			...input.bind
		}
		/> <
		button className = "addBtn"
		type = "submit" > Добавить задачу < /button> <
		/form>
	)
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired
}

export default AddTodo;