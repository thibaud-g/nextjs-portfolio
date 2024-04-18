export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      Article: {
        Row: {
          authorId: number | null;
          body: string;
          createdAt: string;
          description: string | null;
          id: number;
          published: boolean;
          title: string;
          updatedAt: string;
        };
        Insert: {
          authorId?: number | null;
          body: string;
          createdAt?: string;
          description?: string | null;
          id?: number;
          published?: boolean;
          title: string;
          updatedAt: string;
        };
        Update: {
          authorId?: number | null;
          body?: string;
          createdAt?: string;
          description?: string | null;
          id?: number;
          published?: boolean;
          title?: string;
          updatedAt?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Article_authorId_fkey";
            columns: ["authorId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
      Project: {
        Row: {
          createdAt: string;
          id: number;
          imageUrl: string | null;
          isWorkInProgress: boolean;
          name: string;
          stack: string[] | null;
          updatedAt: string;
          url: string | null;
        };
        Insert: {
          createdAt?: string;
          id?: number;
          imageUrl?: string | null;
          isWorkInProgress?: boolean;
          name: string;
          stack?: string[] | null;
          updatedAt: string;
          url?: string | null;
        };
        Update: {
          createdAt?: string;
          id?: number;
          imageUrl?: string | null;
          isWorkInProgress?: boolean;
          name?: string;
          stack?: string[] | null;
          updatedAt?: string;
          url?: string | null;
        };
        Relationships: [];
      };
      User: {
        Row: {
          createdAt: string;
          email: string;
          id: number;
          name: string | null;
          password: string;
          role: Database["public"]["Enums"]["Role"];
          updatedAt: string;
        };
        Insert: {
          createdAt?: string;
          email: string;
          id?: number;
          name?: string | null;
          password: string;
          role?: Database["public"]["Enums"]["Role"];
          updatedAt: string;
        };
        Update: {
          createdAt?: string;
          email?: string;
          id?: number;
          name?: string | null;
          password?: string;
          role?: Database["public"]["Enums"]["Role"];
          updatedAt?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      Role: "USER" | "ADMIN";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
