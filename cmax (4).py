import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
""" def gard_algorithm(n, processing_times):
    # Step 1
    pkh = max([max(processing_times[i]) for i in range(n)])

    # Step 2
    machine_1, machine_2 = [], []
    for i in range(n):
        if pkh in processing_times[i]:
            machine_2.append((i, processing_times[i].index(pkh)))
        else:
            machine_1.append((i, 0))

    # Sort tasks for Step 3 to ensure they are done in order
    machine_1.sort(key=lambda x: processing_times[x[0]][x[1]])
    machine_2.sort(key=lambda x: processing_times[x[0]][x[1]])

    # Initialize completion times for each machine
    completion_time_1 = 0
    completion_time_2 = 0

    # Step 3
    for task_1 in machine_1:
        print(f"Machine 1 - Traitement de la tâche {task_1[0]} sur la machine 1.")
        completion_time_1 += processing_times[task_1[0]][task_1[1]]

    # Step 4
    for task_2 in machine_2:
        print(f"Machine 2 - Traitement de la tâche {task_2[0]} sur la machine 2 à la position {task_2[1]}.")
        completion_time_2 = max(completion_time_2, completion_time_1) + processing_times[task_2[0]][task_2[1]]

    # Calculate Cmax (makespan)
    cmax = max(completion_time_1, completion_time_2)
    return cmax

# Exemple d'utilisation avec des temps d'exécution aléatoires
n = 5  # Nombre de tâches
processing_times = [
    [3, 6],
    [5, 2],
    [1, 2],
    [6, 6],
    [7, 5]
]
makespan = gard_algorithm(n, processing_times)
print(f"\nCmax (Makespan) : {makespan}")
 """

import tkinter as tk

def gard_algorithm(n, processing_times):
    # Step 1
    pkh = max([max(processing_times[i]) for i in range(n)])

    # Step 2
    machine_1, machine_2 = [], []
    for i in range(n):
        if pkh in processing_times[i]:
            machine_2.append((i, processing_times[i].index(pkh)))
        else:
            machine_1.append((i, 0))

    # Sort tasks for Step 3 to ensure they are done in order
    machine_1.sort(key=lambda x: processing_times[x[0]][x[1]])
    machine_2.sort(key=lambda x: processing_times[x[0]][x[1]])

    # Initialize completion times for each machine
    completion_time_1 = 0
    completion_time_2 = 0

    # Store the order of tasks for each machine
    machine1Taches = []
    machine2Taches = []

    # Step 3
    for task_1 in machine_1:
        if task_1[0] != machine_2[0][0]:
            print(f"Machine 1 - Traitement de la tâche {task_1[0]} sur la machine 1.")
            completion_time_1 += processing_times[task_1[0]][task_1[1]]
            machine1Taches.append(task_1[0])

    # Step 4
    print(f"Machine 2 - Traitement de la tâche {machine_2[0][0]} sur la machine 2 à la position {machine_2[0][1]}.")
    completion_time_2 = max(completion_time_2, completion_time_1) + processing_times[machine_2[0][0]][machine_2[0][1]]
    machine2Taches.append(machine_2[0][0])

    # Execute the longest task on machine1Taches
    print(f"Machine 1 - Traitement de la tâche {machine_2[0][0]} sur la machine 1.")
    machine1Taches.append(machine_2[0][0])

    # Step 5
    for task_1 in machine_1:
        if task_1[0] != machine_2[0][0]:
            print(f"Machine 2 - Traitement de la tâche {task_1[0]} sur la machine 2 à la position {task_1[1]}.")
            machine2Taches.append(task_1[0])

    # Calculate Cmax (makespan)
    cmax = max(completion_time_1, completion_time_2)

    return cmax, machine1Taches, machine2Taches


def run_algorithm():
    # Récupérer les données d'entrée depuis l'interface
    n = int(entry_n.get())
    processing_times = []

    for i in range(n):
        row = [int(entry_times[i][j].get()) for j in range(2)]
        processing_times.append(row)

    # Exécuter l'algorithme
    makespan, machine1Taches, machine2Taches = gard_algorithm(n, processing_times)

    # Afficher les résultats dans l'interface
    formatted_machine1Taches = [f"t{tache + 1}" for tache in machine1Taches]
    formatted_machine2Taches = [f"t{tache + 1}" for tache in machine2Taches]

    result_label.config(text=f"Cmax: {makespan}")
    machine1_label.config(text=f"Machine 1: {formatted_machine1Taches}")
    machine2_label.config(text=f"Machine 2: {formatted_machine2Taches}")

# Interface utilisateur
app = tk.Tk()
app.title("Gard Algorithm")

# Entrée pour le nombre de tâches
label_n = tk.Label(app, text="Nombre de tâches:")
label_n.grid(row=0, column=0, padx=5, pady=5)
entry_n = tk.Entry(app)
entry_n.grid(row=0, column=1, padx=5, pady=5)

# Initialiser la liste entry_times
entry_times = []

# Fonction pour mettre à jour les entrées de temps d'exécution en fonction de n
def update_entries():
    n = int(entry_n.get())
    
    for widget in frame_entries.winfo_children():
        widget.destroy()

    entry_times.clear()

    for i in range(n):
        label_task = tk.Label(frame_entries, text=f"Tâche {i + 1}:")
        label_task.grid(row=i, column=0, padx=5, pady=5)

        entry_row = [tk.Entry(frame_entries) for _ in range(2)]
        entry_row[0].grid(row=i, column=1, padx=5, pady=5)
        entry_row[1].grid(row=i, column=2, padx=5, pady=5)
        entry_times.append(entry_row)

# Bouton pour mettre à jour les entrées
update_button = tk.Button(app, text="Mettre à jour les entrées", command=update_entries)
update_button.grid(row=0, column=2, padx=5, pady=5)

# Frame pour les entrées de temps d'exécution
frame_entries = tk.Frame(app)
frame_entries.grid(row=1, column=0, columnspan=3, padx=5, pady=5)

# Bouton pour exécuter l'algorithme
run_button = tk.Button(app, text="Exécuter l'algorithme", command=run_algorithm)
run_button.grid(row=2, column=0, columnspan=3, pady=10)

# Labels pour afficher les résultats
result_label = tk.Label(app, text="Cmax: ")
result_label.grid(row=3, column=0, columnspan=3, pady=5)
machine1_label = tk.Label(app, text="Machine 1: ")
machine1_label.grid(row=4, column=0, columnspan=3, pady=5)
machine2_label = tk.Label(app, text="Machine 2: ")
machine2_label.grid(row=5, column=0, columnspan=3, pady=5)

app.mainloop()