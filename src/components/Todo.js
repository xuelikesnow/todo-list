import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
	function handleCheckboxClick() {
		toggleComplete(todo.id);
	}

	function handleRemoveClick() {
		removeTodo(todo.id);
	}

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				marginTop: "20px",
			}}>
			<input type="checkbox" onClick={handleCheckboxClick} />
			<div
				style={{
					width: "50%",
				}}>
				<li
					style={{
						textDecoration: todo.completed ? "line-through" : null,
						textDecorationColor: todo.completed ? "red" : null,
					}}>
					{todo.task}
				</li>
			</div>
			<button
				onClick={handleRemoveClick}
				style={{
					fontWeight: "bold",
					height: "30px",
				}}>
				X
			</button>
		</div>
	);
}
export default Todo;
