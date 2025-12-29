import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyDataTable } from '../../shared/my-data-table/my-data-table';
import { TableAction, TableColumn } from '../../shared/my-data-table/table.model';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-user',
  imports: [RouterLink, MyDataTable, MatIcon, CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  // 📊 Users Data (Signal)
  users = signal([
    {
      id: 1,
      name: 'Sanjay Kumar',
      email: 'sanjay@gmail.com',
      role: 'Admin',
      status: 'Active',
      createdAt: '2024-11-10'
    },
    {
      id: 2,
      name: 'Abhishek M',
      email: 'abhishek@gmail.com',
      role: 'User',
      status: 'Active',
      createdAt: '2024-12-01'
    },
    {
      id: 3,
      name: 'Ravi Patil',
      email: 'ravi@gmail.com',
      role: 'Manager',
      status: 'Inactive',
      createdAt: '2024-10-15'
    },
    {
      id: 4,
      name: 'Neha Sharma',
      email: 'neha@gmail.com',
      role: 'User',
      status: 'Active',
      createdAt: '2025-01-05'
    }
  ]);

  // 📋 Columns (Static → signal optional)
  columns = signal<TableColumn[]>([
    { key: 'name', label: 'Name', isSortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', isSortable: true },
    { key: 'createdAt', label: 'Created On', isSortable: true }
  ]);

  // 🔐 User Permissions
  userPermissions = signal<string[]>(['READ', 'WRITE', 'DELETE']);

  // ⚙️ Actions (computed from permissions)
  actions = computed<TableAction[]>(() => [
    { type: 'view', label: 'View', icon: 'visibility', permission: 'READ' },
    { type: 'edit', label: 'Edit', icon: 'edit', permission: 'WRITE' },
    { type: 'delete', label: 'Delete', icon: 'delete', permission: 'DELETE' }
  ]);

  // 🧠 Action Handler
  onAction(event: { action: string; row: any }) {
    switch (event.action) {
      case 'view':
        console.log('View user:', event.row);
        break;

      case 'edit':
        console.log('Edit user:', event.row);
        break;

      case 'delete':
        if (confirm(`Delete ${event.row.name}?`)) {
          this.users.update(users =>
            users.filter(u => event.row.id !== event.row.id)
          );
        }
        break;
    }
  }
}
