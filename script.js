function calculateAverage() {
    let input = document.getElementById('grades').value;
    let grades = input.split(',').map(Number);
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    let average = sum / grades.length;
    document.getElementById('result').textContent = `Средняя оценка: ${average.toFixed(2)}`;
}