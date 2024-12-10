document.getElementById('agendamientoForm').addEventListener('submit', function(event) {
    if (confirm('¿Estás seguro de que deseas finalizar la reserva?')) {
        alert('Reserva finalizada con éxito');
    } else {
        event.preventDefault();
    }
});

document.getElementById('agendamientoForm').addEventListener('reset', function(event) {
    if (!confirm('¿Estás seguro de que deseas cancelar la reserva?')) {
        event.preventDefault();
    }
});
