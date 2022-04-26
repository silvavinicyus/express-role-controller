import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import {BaseEntity} from './BaseEntity';
import Permission from "./Permission";
import Role from "./Role";

@Entity('users')
class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'user_permissions',
    joinColumns: [{name: "user_id"}],
    inverseJoinColumns: [{name: "permission_id"}]
  })
  permission: Permission[];

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_roles',
    joinColumns: [{name: "user_id"}],
    inverseJoinColumns: [{name: "role_id"}]
  })
  roles: Role[];
}

export default User;