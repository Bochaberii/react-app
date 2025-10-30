const API = import.meta.env.VITE_API_URL;

// Your existing student functions stay here
export async function fetchStudents() {
    const response = await fetch(`${API}/students`);
    if (!response.ok) {
        throw new Error('Failed to fetch students');
    }
    return response.json();
}

export async function createStudent(student) {
    const response = await fetch(`${API}/students`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    });
    if (!response.ok) {
        throw new Error('Failed to create student');
    }
    return response.json();
}

export async function updateStudent(id, student) {
    console.log('Updating student with ID:', id);
    console.log('Student data:', student);
    
    const response = await fetch(`${API}/students/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    });
    
    console.log('Update response status:', response.status);
    
    if (!response.ok) {
        const errorData = await response.text();
        console.error('Update failed:', errorData);
        throw new Error(`Failed to update student: ${errorData}`);
    }
    return response.json();
}

export async function deleteStudent(id) {
    const response = await fetch(`${API}/students/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete student');
    }
}

// Add this for the assignment
export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}