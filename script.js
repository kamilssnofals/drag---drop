const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragStart = e => {
	e.target.classList.add('hold')
	setTimeout(() => e.target.classList.add('hide'), 0)
}

const dragEnd = e => {
	e.target.classList.remove('hide', 'hold')
}
const dragOver = e => {
	e.preventDefault()
}

const dragEnter = e => {
	e.target.classList.add('hovered')
}

const dragLeave = e => {
	e.target.classList.remove('hovered')
}

const drop = e => {
	e.target.append(item)
	e.target.classList.remove('hovered')
}

placeholders.forEach(el => {
	el.addEventListener('dragover', dragOver)
	el.addEventListener('dragenter', dragEnter)
	el.addEventListener('dragleave', dragLeave)
	el.addEventListener('drop', drop)
})

// for (const placeholder of placeholders) {
// 	placeholder.addEventListener('dragover', dragover)
// 	placeholder.addEventListener('dragenter', dragenter)
// 	placeholder.addEventListener('dragleave', dragleave)
// 	placeholder.addEventListener('drop', drop)
// }

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

